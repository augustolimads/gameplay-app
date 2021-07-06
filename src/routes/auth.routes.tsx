import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signin } from "src/screens/Signin";
import { Home } from "src/screens/Home";
import { NewAppointment } from "src/screens/NewAppointment";
import { theme } from "src/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="signin">
      <Screen
        options={{
          headerShown: false,
        }}
        name="Signin"
        component={Signin}
      />
      <Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          title: "Agendar Partida",
          headerStyle: { backgroundColor: theme.colors.secondary70 },
          headerTitleStyle: {
            fontFamily: theme.fontWeights.titleBold,
            color: theme.colors.heading,
          },
          headerTintColor: theme.colors.heading,
          headerTitleAlign: "center",
        }}
        name="NewAppointment"
        component={NewAppointment}
      />
    </Navigator>
  );
}
