/**
 * Maps mood keywords to movie genres.
 *
 * Used to expand mood preferences into relevant genres for filtering.
 */
const MOOD_TO_GENRES: Record<string, string[]> = {
  sad: ["drama"],
  beautiful: ["drama", "romance"],
  uplifting: ["comedy", "romance"],
  dark: ["thriller", "horror"],
  cozy: ["comedy", "romance"],
  exciting: ["action", "thriller"],
};

/**
 * Map a mood to relevant genres.
 *
 * Translates emotional moods into movie genres to broaden search results.
 *
 * @param mood - The mood keyword (sad, beautiful, uplifting, dark, cozy, exciting)
 * @returns Array of relevant genres, or empty array if mood not found
 *
 * @example
 * mapMoodToGenres("cozy") // => ["comedy", "romance"]
 * mapMoodToGenres("dark") // => ["thriller", "horror"]
 */
export function mapMoodToGenres(mood?: string): string[] {
  if (!mood) return [];
  return MOOD_TO_GENRES[mood.toLowerCase()] || [];
}
