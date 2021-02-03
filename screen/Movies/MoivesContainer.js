import React, { useEffect, useState } from "react";

import { movieApi } from "../../api";
import MoviesPresenter from "../Movies/MoviesPresenter";

const Home = () => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresenter {...movies} />;
};

export default Home;
