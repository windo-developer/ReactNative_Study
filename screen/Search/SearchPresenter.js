import React from "react";
import styled from "styled-components/native";

import HorizontalSlider from "../../components/HorizontalSlider";
import Input from "../../components/Search/input";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

const Container = styled.ScrollView`
  background-color: black;
`;

const Text = styled.Text``;

const SearchPresenter = ({ keyword, onChange, onSubmit, movies, shows }) => {
  return (
    <ScrollContainer
      refreshFn={onSubmit}
      loading={false}
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      <Input
        placeholder={"Write"}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies.length !== 0 && (
        <HorizontalSlider title={"Movie result"}>
          {movies.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
      {shows.length !== 0 && (
        <HorizontalSlider title={"Tv result"}>
          {shows.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              title={show.name}
              poster={show.poster_path}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
    </ScrollContainer>
  );
};

export default SearchPresenter;
