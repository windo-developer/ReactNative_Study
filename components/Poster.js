import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { getApiImage } from "../api";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

// styled Image = resizeMode ={default: cover}
const Poster = ({ url }) => <Image source={{ uri: getApiImage(url) }} />;

Poster.protoType = {
  url: PropTypes.string.isRequired,
};

export default Poster;
