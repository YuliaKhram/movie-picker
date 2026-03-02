import type { Movie } from "./types";
/**
 * Mock movie database for development and testing.
 *
 * Contains 21 sample movies with realistic data including titles, years,
 * genres, cast, and overviews. Used as fallback when API is unavailable.
 */ export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "The Grand Budapest Hotel",
    year: 2014,
    overview:
      "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy under an exceptional concierge.",
    posterUrl: "https://via.placeholder.com/300x450?text=Grand+Budapest",
    genres: ["comedy", "drama"],
    cast: ["Ralph Fiennes", "Tony Revolori", "Saoirse Ronan"],
  },
  {
    id: "2",
    title: "Inception",
    year: 2010,
    overview:
      "A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    posterUrl: "https://via.placeholder.com/300x450?text=Inception",
    genres: ["action", "sci-fi", "thriller"],
    cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
  },
  {
    id: "3",
    title: "The Shawshank Redemption",
    year: 1994,
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl: "https://via.placeholder.com/300x450?text=Shawshank",
    genres: ["drama"],
    cast: ["Tim Robbins", "Morgan Freeman"],
  },
  {
    id: "4",
    title: "Spirited Away",
    year: 2001,
    overview:
      "During her family's move to the suburbs, a sullen girl wanders into a world ruled by gods, witches, and spirits, and no one can leave without losing something precious.",
    posterUrl: "https://via.placeholder.com/300x450?text=Spirited+Away",
    genres: ["animation", "drama", "fantasy"],
    cast: ["Daveigh Chase", "Suzanne Pleshette", "Kirsten Dunst"],
  },
  {
    id: "5",
    title: "Pride and Prejudice",
    year: 2005,
    overview:
      "Elizabeth Bennet, the dynamic heroine of Jane Austen's classic novel about the British landed gentry, refuses to accept the marriage proposal of the proud Mr. Darcy.",
    posterUrl: "https://via.placeholder.com/300x450?text=Pride+Prejudice",
    genres: ["drama", "romance"],
    cast: ["Keira Knightley", "Matthew Macfadyen", "Brenda Blethyn"],
  },
  {
    id: "6",
    title: "The Dark Knight",
    year: 2008,
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests to fight injustice.",
    posterUrl: "https://via.placeholder.com/300x450?text=Dark+Knight",
    genres: ["action", "crime", "drama", "thriller"],
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    id: "7",
    title: "Life is Beautiful",
    year: 1997,
    overview:
      "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of charm, humor, and imagination to protect his son from the dangers and traumatic elements of their internment.",
    posterUrl: "https://via.placeholder.com/300x450?text=Life+Beautiful",
    genres: ["comedy", "drama"],
    cast: ["Roberto Benigni", "Nicoletta Braschi", "Giustino Durano"],
  },
  {
    id: "8",
    title: "Midnight in Paris",
    year: 2011,
    overview:
      "A romantic comedy about a family trip to Paris. The main character accidentally travels back to the 1920s each night at midnight.",
    posterUrl: "https://via.placeholder.com/300x450?text=Midnight+Paris",
    genres: ["comedy", "fantasy", "romance"],
    cast: ["Owen Wilson", "Marion Cotillard", "Kathy Bates"],
  },
  {
    id: "9",
    title: "The Conjuring",
    year: 2013,
    overview:
      "Paranormal investigators work to help a family terrorized by a dark presence in their farmhouse.",
    posterUrl: "https://via.placeholder.com/300x450?text=Conjuring",
    genres: ["horror", "mystery", "thriller"],
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
  },
  {
    id: "10",
    title: "Amélie",
    year: 2001,
    overview:
      "A shy waitress living in Paris decides to change the lives of those around her for the better, while struggling with her own isolation.",
    posterUrl: "https://via.placeholder.com/300x450?text=Amelie",
    genres: ["comedy", "drama", "fantasy", "romance"],
    cast: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
  },
  {
    id: "11",
    title: "Interstellar",
    year: 2014,
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://via.placeholder.com/300x450?text=Interstellar",
    genres: ["adventure", "drama", "sci-fi"],
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
  },
  {
    id: "12",
    title: "Whiplash",
    year: 2014,
    overview:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor.",
    posterUrl: "https://via.placeholder.com/300x450?text=Whiplash",
    genres: ["drama", "music"],
    cast: ["Miles Teller", "J.K. Simmons"],
  },
  {
    id: "13",
    title: "Warrior",
    year: 2011,
    overview:
      "Two estranged brothers face off in a mixed martial arts tournament.",
    posterUrl: "https://via.placeholder.com/300x450?text=Warrior",
    genres: ["action", "drama", "sport"],
    cast: ["Tom Hardy", "Joel Edgerton", "Nick Nolte"],
  },
  {
    id: "14",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    overview:
      "When their relationship ends, a couple undergoes a procedure to erase each other from their memories.",
    posterUrl: "https://via.placeholder.com/300x450?text=Eternal+Sunshine",
    genres: ["drama", "romance", "sci-fi"],
    cast: ["Jim Carrey", "Kate Winslet", "Tom Wilkinson"],
  },
  {
    id: "15",
    title: "Pulp Fiction",
    year: 1994,
    overview:
      "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    posterUrl: "https://via.placeholder.com/300x450?text=Pulp+Fiction",
    genres: ["crime", "drama"],
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
  },
  {
    id: "16",
    title: "The Lighthouse",
    year: 2019,
    overview:
      "Two lighthouse keepers tend the light on a remote New England island in the 1890s.",
    posterUrl: "https://via.placeholder.com/300x450?text=Lighthouse",
    genres: ["drama", "horror", "mystery"],
    cast: ["Robert Pattinson", "Willem Dafoe"],
  },
  {
    id: "17",
    title: "La La Land",
    year: 2016,
    overview:
      "While navigating their careers in Los Angeles, a pianist and an actress fall in love while pursuing their dreams.",
    posterUrl: "https://via.placeholder.com/300x450?text=La+La+Land",
    genres: ["comedy", "drama", "music", "romance"],
    cast: ["Ryan Gosling", "Emma Stone"],
  },
  {
    id: "18",
    title: "The Silence of the Lambs",
    year: 1991,
    overview:
      "A young FBI cadet must receive the help of an incarcerated cannibalistic killer to catch another serial killer who skins his victims.",
    posterUrl: "https://via.placeholder.com/300x450?text=Silence+Lambs",
    genres: ["crime", "drama", "thriller"],
    cast: ["Jodie Foster", "Scott Glenn", "Anthony Hopkins"],
  },
  {
    id: "19",
    title: "The Secret of Kells",
    year: 2009,
    overview:
      "A young apprentice in a medieval Abbey must escape his sheltered life and embark on a dangerous mission to save an ancient magical book.",
    posterUrl: "https://via.placeholder.com/300x450?text=Kells",
    genres: ["animation", "adventure", "fantasy"],
    cast: ["Evan McGuire", "Brendan Gleeson"],
  },
  {
    id: "21",
    title: "The Butterfly Effect",
    year: 2004,
    overview:
      "A college student soon discovers that by observing events from the past, he changes what the present is and his life dissolves into different versions of reality.",
    posterUrl: "https://via.placeholder.com/300x450?text=Butterfly+Effect",
    genres: ["sci-fi", "thriller"],
    cast: ["Ashton Kutcher", "Amy Smart", "John Patrick Amedori"],
  },
];
