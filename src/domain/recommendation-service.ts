import type { Movie, Preference } from "./types";
import { mockMovies } from "./mock-movies";
import { mapMoodToGenres } from "./mood-mapping";

/**
 * Get mock movie recommendations based on user preferences.
 *
 * Filters movies by genre, actor, and mood-derived genres, then ranks results
 * by relevance (actor match > genre match > mood match > recency).
 *
 * @param preference - User preferences with optional genre, actor, and mood
 * @returns Array of up to 5 recommended movies, sorted by relevance
 *
 * @example
 * getMockRecommendations({ genre: "drama", mood: "sad" })
 * // => [Movie[], most relevant first]
 *
 * @example
 * getMockRecommendations({ actor: "Leonardo DiCaprio" })
 * // => [Inception, ...] (Leonardo's movies ranked by recency)
 */
export function getMockRecommendations(preference: Preference): Movie[] {
  let candidates = [...mockMovies];

  // Start with base genres or those derived from mood
  const targetGenres: string[] = [];
  if (preference.genre) {
    targetGenres.push(preference.genre);
  }
  if (preference.mood) {
    targetGenres.push(...mapMoodToGenres(preference.mood));
  }

  // Filter by preferred genres if any
  if (targetGenres.length > 0) {
    candidates = candidates.filter((movie) =>
      movie.genres.some((g) => targetGenres.includes(g)),
    );
  }

  // Filter by actor if specified
  if (preference.actor) {
    const actorLower = preference.actor.toLowerCase();
    candidates = candidates.filter((movie) =>
      movie.cast.some((c) => c.toLowerCase().includes(actorLower)),
    );
  }

  // Score and rank results
  const scored = candidates.map((movie) => {
    let score = 0;

    // Bonus for genre matches
    if (preference.genre && movie.genres.includes(preference.genre)) {
      score += 10;
    }

    // Bonus for mood-derived genre matches
    if (preference.mood) {
      const moodGenres = mapMoodToGenres(preference.mood);
      score += movie.genres.filter((g) => moodGenres.includes(g)).length * 5;
    }

    // Bonus for actor matches
    if (preference.actor) {
      const actorLower = preference.actor.toLowerCase();
      if (movie.cast.some((c) => c.toLowerCase().includes(actorLower))) {
        score += 15;
      }
    }

    // Slight bonus for more recent movies
    score += Math.max(0, (movie.year - 1990) * 0.05);

    return { movie, score };
  });

  // Sort by score descending and return top 5
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.movie);
}
