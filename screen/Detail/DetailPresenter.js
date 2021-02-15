import React from "react";
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

import { getApiImage } from "../../api";
import Link from "../../components/Detail/Link";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";
import { formatDate, numberComma } from "../../utils";

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
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

const DetailPresenter = ({ openBrowser, result, loading }) => {
  return (
    <ScrollContainer
      loading={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <>
        <Header>
          <Background
            source={{ uri: getApiImage(result.backgroundImage, "") }}
          />
          <Container>
            <Poster url={result.poster} />
            <Info>
              <Title>{result.title}</Title>
              {result.votes && <Votes votes={result.votes} />}
            </Info>
          </Container>
        </Header>
        <Data>
          {result.overview ? (
            <>
              <DataName>Overview</DataName>
              <DataValue>{result.overview}</DataValue>
            </>
          ) : null}
          {loading ? (
            <ActivityIndicator color="white" style={{ marginTop: 30 }} />
          ) : null}
          {result.spoken_languages && (
            <>
              <DataName>Languages</DataName>
              <DataValue>
                {result.spoken_languages.map((lang) => `${lang.name} `)}
              </DataValue>
            </>
          )}
          {result.release_date ? (
            <>
              <DataName>Release Date</DataName>
              <DataValue>{formatDate(result.release_date)}</DataValue>
            </>
          ) : null}
          {result.status ? (
            <>
              <DataName>Status</DataName>
              <DataValue>{result.status}</DataValue>
            </>
          ) : null}
          {result.runtime ? (
            <>
              <DataName>Runtime</DataName>
              <DataValue>{result.runtime} minutes</DataValue>
            </>
          ) : null}
          {result.revenue ? (
            <>
              <DataName>Revenue</DataName>
              <DataValue>{numberComma(result.revenue)} $</DataValue>
            </>
          ) : null}
          {result.first_air_date ? (
            <>
              <DataName>First Air Date</DataName>
              <DataValue>{formatDate(result.first_air_date)}</DataValue>
            </>
          ) : null}
          {result.genres ? (
            <>
              <DataName>Genres</DataName>
              <DataValue>
                {result.genres.map((gen, index) =>
                  index + 1 === result.genres.length
                    ? gen.name
                    : `${gen.name}, `
                )}
              </DataValue>
            </>
          ) : null}
          {result.number_of_episodes ? (
            <>
              <DataName>Seasons / Episodes</DataName>
              <DataValue>
                {result.number_of_seasons} / {result.number_of_episodes}
              </DataValue>
            </>
          ) : null}
          {result.imdb_id ? (
            <>
              <DataName>Links</DataName>
              <Link
                text={"IMDB Page"}
                icon={"imdb"}
                onPress={() =>
                  openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
                }
              ></Link>
            </>
          ) : null}
          {result.videos.result?.length > 0 && (
            <>
              <DataName>Videos</DataName>
              {result.videos.result.map((video) => (
                <Link
                  key={video.id}
                  text={video.name}
                  icon="youtube"
                  onPress={() =>
                    openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                  }
                ></Link>
              ))}
            </>
          )}
        </Data>
      </>
    </ScrollContainer>
  );
};

export default DetailPresenter;
