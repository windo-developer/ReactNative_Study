import React, { useEffect, useLayoutEffect } from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Movies from "../screen/Movies";
import Tv from "../screen/Tv";
import Search from "../screen/Search";
import Favourites from "../screen/Favourites";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const headerName = getFocusedRouteNameFromRoute(route) ?? "Movies";
    navigation.setOptions({
      title: headerName,
    });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Discovery") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={25}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Favourites} />
    </Tabs.Navigator>
  );
};
