import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import * as WebBrowser from "expo-web-browser";

import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = ({ navigation, route }) => {
  const {
    id,
    title,
    backgroundImage,
    poster,
    votes,
    overview,
    isTv,
  } = route.params;

  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      overview,
      votes,
      videos: { result: [] },
    },
  });

  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return <DetailPresenter openBrowser={openBrowser} {...detail} />;
};

export default DetailContainer;

/*
export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview, isTv },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    result: { title, backgroundImage, poster, overview, votes },
  });

  const getData = async () => {
    try {
      const [getDetail, getDetailError] = isTv
        ? await tvApi.show(id)
        : await movieApi.movie(id);
      setDetail({
        loading: false,
        result: {
          ...getDetail,
          title: getDetail.title || getDetail.name,
          backgroundImage: getDetail.backdrop_path,
          poster: getDetail.poster_path,
          overview: getDetail.overview,
          votes: getDetail.vote_average,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return <DetailPresenter {...detail} />;
};
*/
