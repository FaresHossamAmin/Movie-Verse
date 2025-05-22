import React, { createContext, useState, useEffect } from "react";
import { ENDPOINTS } from "../utils/tmdb";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genresMovies, setGenresMovies] = useState([]);
  const [favorites, setFavorites] = useState({});

  // here favorites are loaded from storage on startup
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem("movieFavorites");
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.error("Failed to load favorites", error);
      }
    };

    loadFavorites();
  }, []);

  // save favorites to storage when they change
  useEffect(() => {
    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem("movieFavorites", JSON.stringify(favorites));
      } catch (error) {
        console.error("Failed to save favorites", error);
      }
    };
    saveFavorites();
  }, [favorites]);

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const updated = { ...prev };
      if (updated[movie.id]) {
        delete updated[movie.id];
      } else {
        updated[movie.id] = movie;
      }
      return updated;
    });
  };
  const clearFavorites = async () => {
    try {
      await AsyncStorage.removeItem("movieFavorites");
      setFavorites({});
    } catch (error) {
      console.error("Failed to clear favorites", error);
    }
  };

  useEffect(() => {
    const fetchPopular = () => {
      fetch(ENDPOINTS.POPULAR)
        .then((res) => res.json())
        .then((data) => setPopularMovies(data.results));
    };

    const fetchNowPlaying = () => {
      fetch(ENDPOINTS.NOW_PLAYING)
        .then((res) => res.json())
        .then((data) => setNowPlayingMovies(data.results));
    };

    const fetchTopRated = () => {
      fetch(ENDPOINTS.TOP_RATED)
        .then((res) => res.json())
        .then((data) => setTopRatedMovies(data.results));
    };

    const fetchGenresMovies = async () => {
      const genreKeys = [
        ENDPOINTS.ACTION,
        ENDPOINTS.ADVENTURE,
        ENDPOINTS.ANIMATION,
        ENDPOINTS.COMEDY,
        ENDPOINTS.CRIME,
        ENDPOINTS.DRAMA,
        ENDPOINTS.FANTASY,
        ENDPOINTS.HORROR,
        ENDPOINTS.SCI_FI,
      ];

      const genreNames = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Horror",
        "Sci Fi",
      ];

      const promises = genreKeys.map(async (genreUrl, index) => {
        const res = await fetch(genreUrl);
        const data = await res.json();
        return {
          id: genreNames[index].toLowerCase().replace(" ", "_"),
          name: genreNames[index],
          movies: data.results,
        };
      });

      const genresWithMovies = await Promise.all(promises);
      setGenresMovies(genresWithMovies);
    };

    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    fetchGenresMovies();
  }, []);

  const cntxtValue = {
    popularMovies,
    nowPlayingMovies,
    topRatedMovies,
    genresMovies,
    favorites,
    toggleFavorite,
    clearFavorites,
  };

  return (
    <MovieContext.Provider value={cntxtValue}>{children}</MovieContext.Provider>
  );
};

export default MovieProvider;
