import { z } from "zod";
import type { Preference } from "./types";

/**
 * Zod schema for validating movie preferences.
 *
 * Used for runtime validation before passing preferences to recommendation engine.
 * Ensures data integrity and provides clear error messages for invalid input.
 */
export const PreferenceSchema = z.object({
  genre: z.string().toLowerCase().optional(),
  actor: z.string().optional(),
  mood: z.string().toLowerCase().optional(),
});

/**
 * Type-safe validation for user preferences.
 *
 * @param data - Input data to validate
 * @returns Validated Preference or throws ZodError
 *
 * @example
 * const prefs = validatePreference({ genre: "Comedy", actor: "Emma Stone" });
 * // Safe to use in getMockRecommendations()
 */
export function validatePreference(data: unknown): Preference {
  return PreferenceSchema.parse(data);
}

/**
 * Safe validation that returns result or default empty object.
 *
 * @param data - Input data to validate
 * @returns Validated Preference or empty object on failure
 *
 * @example
 * const prefs = safeValidatePreference(userInput);
 * // Never throws, always returns valid Preference
 */
export function safeValidatePreference(data: unknown): Preference {
  const result = PreferenceSchema.safeParse(data);
  return result.success ? result.data : {};
}
