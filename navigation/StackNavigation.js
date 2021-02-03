import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigation from "./TabNavigation";
import Detail from "../screen/Detail";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen name="Tabs" component={TabNavigation} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
