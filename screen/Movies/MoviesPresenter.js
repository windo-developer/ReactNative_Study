import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Slider from "../../components/Movies/Slider";
import Title from "../../components/Title";
import List from "../../components/List";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window"); // phone screen

const Container = styled.View`
  flex: 1;
`;

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Text = styled.Text``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={10}>
          {nowPlaying.map((movie) => (
            <Slider
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
              overview={movie.overview}
              votes={movie.vote_average}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={"Coming Soon"}>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              overview={movie.overview}
              votes={movie.vote_average}
              releaseDate={movie.release_date}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
