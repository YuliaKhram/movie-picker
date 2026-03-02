/**
 * A movie with metadata for recommendations.
 *
 * @property id - Unique identifier
 * @property title - Movie title
 * @property year - Release year
 * @property overview - Brief description
 * @property posterUrl - URL to poster image
 * @property genres - List of genre tags
 * @property cast - List of actor names
 */
export interface Movie {
  id: string;
  title: string;
  year: number;
  overview: string;
  posterUrl: string;
  genres: string[];
  cast: string[];
}

/**
 * User preferences for movie recommendations.
 *
 * @property genre - Preferred genre (comedy, drama, horror, etc.)
 * @property actor - Preferred actor name
 * @property mood - Emotional mood (sad, cozy, dark, etc.)
 */
export interface Preference {
  genre?: string;
  actor?: string;
  mood?: string;
}
