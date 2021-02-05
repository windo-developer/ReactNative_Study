import React from "react";
import { View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";

import { getApiImage } from "../../api";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";

const Background = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 80px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 5px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

const DetailPresenter = ({
  backgroundImage,
  poster,
  title,
  votes,
  overview,
}) => {
  return (
    <ScrollContainer loading={false}>
      <>
        <Header>
          <Background source={{ uri: getApiImage(backgroundImage, "") }} />
          <Container>
            <Poster url={poster} />
            <Info>
              <Title>{title}</Title>
              {votes && <Votes votes={votes} />}
            </Info>
          </Container>
        </Header>
        <Data>
          {overview && (
            <>
              <DataName>Overview</DataName>
              <DataValue>{overview}</DataValue>
            </>
          )}
        </Data>
      </>
    </ScrollContainer>
  );
};

export default DetailPresenter;