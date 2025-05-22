// utils/tmdb.js

const API_KEY = "49b53bd8106ac77b5fe863fa9ee58773";
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const buildGenreUrl = (genreId) =>
  `${BASE_URL}/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&api_key=${API_KEY}&language=en-US&page=1`;

export const ENDPOINTS = {
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  TOP_RATED: `${BASE_URL}/movie/top_rated?sort_by=popularity&api_key=${API_KEY}&language=en-US&page=1`,

  ACTION: buildGenreUrl(28),
  ADVENTURE: buildGenreUrl(12),
  ANIMATION: buildGenreUrl(16),
  COMEDY: buildGenreUrl(35),
  CRIME: buildGenreUrl(80),
  DRAMA: buildGenreUrl(18),
  FANTASY: buildGenreUrl(14),
  HORROR: buildGenreUrl(27),
  SCI_FI: buildGenreUrl(878),
};
