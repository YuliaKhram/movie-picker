/**
 * DOMAIN LAYER - Movie Recommendations
 *
 * This domain layer contains all business logic for movie recommendations,
 * completely independent of React or any UI framework.
 */

import { parsePreferences } from "./parse-preferences";
import { getMockRecommendations } from "./recommendation-service";

// Example 1: Simple genre-based recommendation
console.log("=== Example 1: Comedy movies ===");
const comedyPrefs = parsePreferences("I want to watch a comedy");
const comedyMovies = getMockRecommendations(comedyPrefs);
console.log("Preferences:", comedyPrefs);
console.log(
  "Recommendations:",
  comedyMovies.map((m) => m.title),
);

// Example 2: Genre with actor
console.log("\n=== Example 2: Drama with Leonardo DiCaprio ===");
const dramaWithLeo = parsePreferences("Show me a drama with Leonardo DiCaprio");
const leoMovies = getMockRecommendations(dramaWithLeo);
console.log("Preferences:", dramaWithLeo);
console.log(
  "Recommendations:",
  leoMovies.map((m) => m.title),
);

// Example 3: Mood-based recommendation
console.log("\n=== Example 3: Cozy feeling ===");
const cozyPrefs = parsePreferences("I want something cozy and heartwarming");
const cozyMovies = getMockRecommendations(cozyPrefs);
console.log("Preferences:", cozyPrefs);
console.log(
  "Recommendations:",
  cozyMovies.map((m) => m.title),
);

// Example 4: Complex preference
console.log("\n=== Example 4: Complex preference ===");
const complexPrefs = parsePreferences(
  "Show me a dark thriller with Tom Hardy that feels exciting",
);
const complexMovies = getMockRecommendations(complexPrefs);
console.log("Preferences:", complexPrefs);
console.log(
  "Recommendations:",
  complexMovies.map((m) => m.title),
);

// Example 5: Direct API usage (for React components)
console.log("\n=== Example 5: Direct API usage ===");
const customPrefs = {
  genre: "romance",
  mood: "uplifting",
};
const romanticMovies = getMockRecommendations(customPrefs);
console.log("Preferences:", customPrefs);
console.log(
  "Recommendations:",
  romanticMovies.map((m) => `${m.title} (${m.year})`),
);
