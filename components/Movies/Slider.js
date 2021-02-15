import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native-gesture-handler";

import { getApiImage } from "../../api";
import Poster from "../Poster";
import Votes from "../Votes";
import { trimText } from "../../utils";
import { useNavigation } from "@react-navigation/native";

/*
FIXME: 이 부분은 MoviesPresenter로 이전함
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen"); // phone screen

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: red;
`;
*/

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  margin-bottom: 7px;
  font-weight: bold;
  font-size: 20px;
`;

const VotesContainer = styled.Text`
  color: rgba(220, 220, 220, 100);
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 500;
`;

const OverView = styled.Text`
  color: rgba(220, 220, 220, 100);
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  background-color: #e74c3c;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slider = ({ id, title, backgroundImage, poster, votes, overview }) => {
  const navigation = useNavigation();
  const goToDetail = () =>
    navigation.navigate("Detail", {
      id,
      title,
      backgroundImage,
      poster,
      votes,
      overview,
    });
  return (
    <Container>
      <BackgroundImage
        source={{ uri: getApiImage(backgroundImage, "") }}
        resizeMode="cover"
      />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <OverView>{trimText(overview, 120)}</OverView>
          <TouchableOpacity onPress={goToDetail}>
            <Button>
              <ButtonText>See detail</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slider.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Slider;
