import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";

import Poster from "./Poster";
import { trimText, formatDate } from "../utils";

const Container = styled.View`
  margin-bottom: 30px;
  padding: 0px 30px;
  flex-direction: row;
  align-content: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`;

const OverView = styled.Text`
  color: white;
  margin-top: 10px;
`;

const Horizontal = ({
  id,
  title,
  poster,
  overview,
  releaseDate,
  isTv = false,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      isTv,
      id,
      title,
      poster,
      releaseDate,
      overview,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {releaseDate ? (
            <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
          ) : null}
          <OverView>{trimText(overview, 120)}</OverView>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
