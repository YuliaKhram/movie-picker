import { parsePreferences } from "../parse-preferences";
import { mapMoodToGenres } from "../mood-mapping";
import { getMockRecommendations } from "../recommendation-service";
import type { Movie } from "../types";

describe("Domain: Movie Recommendations", () => {
  describe("parsePreferences", () => {
    it("should extract genre from input", () => {
      const result = parsePreferences("I want to watch a comedy");
      expect(result.genre).toBe("comedy");
    });

    it("should handle sci-fi and science fiction interchangeably", () => {
      const result1 = parsePreferences("I like sci-fi movies");
      const result2 = parsePreferences("I prefer science fiction");
      expect(result1.genre).toBe("sci-fi");
      expect(result2.genre).toBe("sci-fi");
    });

    it("should extract actor from 'with <Name>' format", () => {
      const result = parsePreferences("I want a movie with Tom Hanks");
      expect(result.actor).toBe("Tom Hanks");
    });

    it("should extract mood from input", () => {
      const result = parsePreferences("I want something sad and dramatic");
      expect(result.mood).toBe("sad");
    });

    it("should extract all three preference types", () => {
      const result = parsePreferences(
        "Show me a comedy with Emma Stone that feels cozy",
      );
      expect(result.genre).toBe("comedy");
      expect(result.actor).toBe("Emma Stone");
      expect(result.mood).toBe("cozy");
    });

    it("should return empty preference for no matches", () => {
      const result = parsePreferences("xyz abc");
      expect(result).toEqual({});
    });

    it("should be case-insensitive", () => {
      const result = parsePreferences("I WANT A DRAMA WITH TOM HARDY");
      expect(result.genre).toBe("drama");
      expect(result.actor).toBe("Tom Hardy");
    });
  });

  describe("mapMoodToGenres", () => {
    it("should map sad to drama", () => {
      expect(mapMoodToGenres("sad")).toEqual(["drama"]);
    });

    it("should map beautiful to drama and romance", () => {
      expect(mapMoodToGenres("beautiful")).toEqual(["drama", "romance"]);
    });

    it("should map uplifting to comedy and romance", () => {
      expect(mapMoodToGenres("uplifting")).toEqual(["comedy", "romance"]);
    });

    it("should map dark to thriller and horror", () => {
      expect(mapMoodToGenres("dark")).toEqual(["thriller", "horror"]);
    });

    it("should map cozy to comedy and romance", () => {
      expect(mapMoodToGenres("cozy")).toEqual(["comedy", "romance"]);
    });

    it("should map exciting to action and thriller", () => {
      expect(mapMoodToGenres("exciting")).toEqual(["action", "thriller"]);
    });

    it("should return empty array for unknown mood", () => {
      expect(mapMoodToGenres("unknown")).toEqual([]);
    });

    it("should return empty array for undefined mood", () => {
      expect(mapMoodToGenres()).toEqual([]);
    });

    it("should be case-insensitive", () => {
      expect(mapMoodToGenres("SAD")).toEqual(["drama"]);
      expect(mapMoodToGenres("CoZy")).toEqual(["comedy", "romance"]);
    });
  });

  describe("getMockRecommendations", () => {
    it("should return recommendations when no preferences given", () => {
      const result = getMockRecommendations({});
      expect(result.length).toBeGreaterThan(0);
      expect(result.length).toBeLessThanOrEqual(5);
    });

    it("should filter by genre", () => {
      const result = getMockRecommendations({ genre: "comedy" });
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((m: Movie) => m.genres.includes("comedy"))).toBe(
        true,
      );
    });

    it("should filter by actor", () => {
      const result = getMockRecommendations({ actor: "Ralph Fiennes" });
      expect(result.length).toBeGreaterThan(0);
      expect(
        result.every((m: Movie) =>
          m.cast.some((c: string) => c.toLowerCase().includes("ralph")),
        ),
      ).toBe(true);
    });

    it("should expand genres by mood", () => {
      const result = getMockRecommendations({ mood: "dark" });
      // Dark maps to thriller and horror
      expect(
        result.every((m: Movie) =>
          m.genres.some((g: string) => ["thriller", "horror"].includes(g)),
        ),
      ).toBe(true);
    });

    it("should combine genre and mood preferences", () => {
      const result = getMockRecommendations({
        genre: "drama",
        mood: "sad",
      });
      expect(result.length).toBeGreaterThan(0);
      expect(result.every((m: Movie) => m.genres.includes("drama"))).toBe(true);
    });

    it("should return at most 5 results", () => {
      const result = getMockRecommendations({ genre: "comedy" });
      expect(result.length).toBeLessThanOrEqual(5);
    });

    it("should rank actor matches highest", () => {
      const result = getMockRecommendations({
        actor: "Leonardo DiCaprio",
        genre: "sci-fi",
      });
      if (result.length > 0) {
        // First result should have Leonardo DiCaprio (Inception)
        expect(result[0].cast.some((c: string) => c.includes("Leonardo"))).toBe(
          true,
        );
      }
    });

    it("should be case-insensitive for actor search", () => {
      const result1 = getMockRecommendations({ actor: "leonardo dicaprio" });
      const result2 = getMockRecommendations({ actor: "Leonardo DiCaprio" });
      expect(result1.length).toBe(result2.length);
    });
  });
});
