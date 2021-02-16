import React from "react";
import { ScrollView, View } from "react-native";
import PropTypes from "prop-types";

import Title from "./Title";

const HorizontalSlider = ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      horizontal={true}
      style={{ marginTop: 20, marginBottom: 40 }}
      contentContainerStyle={{ paddingLeft: 30 }}
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </View>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
