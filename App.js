import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/StackNavigation";

const cachesImages = (iamges) =>
  iamges.map((image) => {
    if (typeof iamge == "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cachesFont = (fonts) =>
  fonts.map((font) => [Font.loadAsync(font), Font.loadAsync(font)]);

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const image = cachesImages([
      "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1472847720459-21ede812f22a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bm98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      require("./assets/splash.png"),
    ]);
    const fonts = cachesFont([Ionicons.font]);
    return Promise.all([...image, ...fonts]);
  };
  const onFinish = () => setIsReady(true);

  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
