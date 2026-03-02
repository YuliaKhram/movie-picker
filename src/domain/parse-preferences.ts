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

  // Extract genre
  const foundGenre = GENRE_KEYWORDS.find((genre) => lowerInput.includes(genre));
  if (foundGenre) {
    // Normalize "science fiction" to "sci-fi"
    preference.genre = foundGenre === "science fiction" ? "sci-fi" : foundGenre;
  }

  // Extract actor ("with <Name>") - supports multi-word names with apostrophes
  // Matches: "with Emma Stone", "with Dwayne The Rock Johnson", etc.
  const actorMatch = input.match(
    /\bwith\s+([A-Za-z\s'-]+?)(?:\s+that|\s+and|$)/i,
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

  // Extract mood
  const foundMood = MOOD_KEYWORDS.find((mood) => lowerInput.includes(mood));
  if (foundMood) {
    preference.mood = foundMood;
  }

  return preference;
}
