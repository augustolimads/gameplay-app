import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "src/screens/Main";
import { Signin } from "src/screens/Signin";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Signin" component={Signin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
