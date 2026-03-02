/**
 * Domain Layer - Movie Recommendations
 *
 * Barrel export for all domain layer types and functions.
 * All business logic is contained here, independent of React or UI framework.
 */

// Types
export type { Movie, Preference } from "./types";

// Functions
export { parsePreferences } from "./parse-preferences";
export { mapMoodToGenres } from "./mood-mapping";
export { getMockRecommendations } from "./recommendation-service";
export {
  validatePreference,
  safeValidatePreference,
  PreferenceSchema,
} from "./validation";

// Data
export { mockMovies } from "./mock-movies";
