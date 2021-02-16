import React, { useState, useEffect } from "react";

import { movieApi } from "../../api";
import FavouritesPresenter from "./FavouritesPresenter";

const FavouritesContainer = () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <FavouritesPresenter {...movies} />;
};

export default FavouritesContainer;
