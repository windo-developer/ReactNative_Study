import React from "react";
import { useState } from "react";
import { movieApi, tvApi } from "../../api";

import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    movies: [],
    moviesError: null,
    shows: [],
    showsError: null,
  });
  const onChange = (text) => setKeyword(text);
  const search = async () => {
    if (keyword === "") return;

    const [movies, moviesError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      moviesError,
      shows,
      showsError,
    });
  };
  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};

export default SearchContainer;
