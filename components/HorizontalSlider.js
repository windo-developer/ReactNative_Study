import React from "react";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";

import Title from "./Title";

const HorizontalSlider = ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      horizontal
      style={{ marginTop: 20, marginBottom: 20 }}
      contentContainerStyle={{ paddingLeft: 30 }}
    >
      {children}
    </ScrollView>
  </View>
);

HorizontalSlider.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
