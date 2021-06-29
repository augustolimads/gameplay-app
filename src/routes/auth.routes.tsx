import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin } from "src/screens/Signin";
import { Home } from "src/screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator headerMode="none" initialRouteName="Siginin">
      <Screen name="Signin" component={Signin} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
