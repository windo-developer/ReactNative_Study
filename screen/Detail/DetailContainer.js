import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";

import { movieApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [movie, setMovie] = useState({
    id,
    title,
    backgroundImage,
    poster,
    votes,
    overview,
  });

  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.movie(id);
    setMovie({
      ...getMovie,
      title: getMovie.title,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      overview: getMovie.overview,
      votes: getMovie.vote_average,
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return <DetailPresenter {...movie} />;
};
