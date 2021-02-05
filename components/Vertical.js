import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import PropTypes from "prop-types";

import Poster from "./Poster";
import Votes from "./Votes";
import { trimText } from "../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Vertical = ({ id, title, poster, votes }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      title,
      poster,
      votes,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.protoType = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
