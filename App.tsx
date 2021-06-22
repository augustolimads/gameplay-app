import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "src/theme";
import { Routes } from "src/routes";
import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <Routes />
    </ThemeProvider>
  );
}
