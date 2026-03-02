import type { Preference } from "./types";

const GENRE_KEYWORDS = [
  "comedy",
  "drama",
  "horror",
  "action",
  "thriller",
  "romance",
  "sci-fi",
  "science fiction",
];

const MOOD_KEYWORDS = [
  "sad",
  "beautiful",
  "uplifting",
  "dark",
  "cozy",
  "exciting",
];

function escapeForRegex(input: string) {
  return input.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
}

/**
 * Parse user input string to extract movie preferences.
 *
 * Supports:
 * - Genre keywords: comedy, drama, horror, action, thriller, romance, sci-fi
 * - Actor references: "with <FirstName> <LastName>"
 * - Mood keywords: sad, beautiful, uplifting, dark, cozy, exciting
 *
 * @param input - Natural language string describing movie preferences
 * @returns Preference object with extracted genre, actor, and mood
 *
 * @example
 * parsePreferences("I want a comedy with Emma Stone that feels cozy")
 * // => { genre: "comedy", actor: "Emma Stone", mood: "cozy" }
 */
export function parsePreferences(input: string): Preference {
  const lowerInput = input.toLowerCase();
  const preference: Preference = {};

  // Extract genre using word-boundary matching to avoid substring false-positives
  const foundGenre = GENRE_KEYWORDS.find((genre) => {
    const pattern = new RegExp(`\\b${escapeForRegex(genre)}\\b`, "i");
    return pattern.test(input);
  });
  if (foundGenre) {
    // Normalize "science fiction" to "sci-fi"
    preference.genre = foundGenre === "science fiction" ? "sci-fi" : foundGenre;
  }

  // Extract actor ("with <Name>") - supports multi-word names and avoids
  // capturing trailing filler words like "please", "in it", "starring", etc.
  // Examples matched correctly: "with Emma Stone", "with Dwayne The Rock Johnson"
  // Avoids: "with Tom Hardy in it" -> captures "Tom Hardy"
  const actorMatch = input.match(
    /\bwith\s+([A-Za-z][A-Za-z'`.-]*(?:\s+[A-Za-z][A-Za-z'`.-]*){0,6}?)(?:(?=\s+(?:that|and|in(?:\s+it)?|please|thanks?|who|starring|featuring|is|as|,|\.|$))|$)/i,
  );
  if (actorMatch) {
    // Normalize to Title Case
    const actorName = actorMatch[1]
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    preference.actor = actorName;
  }

  // Extract mood using whole-word matching to avoid accidental matches
  const foundMood = MOOD_KEYWORDS.find((mood) => {
    const pattern = new RegExp(`\\b${escapeForRegex(mood)}\\b`, "i");
    return pattern.test(input);
  });
  if (foundMood) {
    preference.mood = foundMood;
  }

  return preference;
}
