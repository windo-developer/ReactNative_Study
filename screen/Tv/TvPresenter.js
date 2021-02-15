import React from "react";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";

import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today, refreshFn }) => (
  <ScrollContainer loading={loading} refreshFn={refreshFn}>
    <Container>
      <HorizontalSlider title="Popular Shows">
        {popular.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated.map((show) => (
          <Vertical
            isTv={true}
            id={show.id}
            key={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            isTv={true}
            key={show.id}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
