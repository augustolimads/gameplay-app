import styled, { css } from "styled-components/native";
import { ThemeProps } from "src/theme";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity``;

export const Icon = styled(Ionicons).attrs(({ theme }) => ({
  name: "chevron-back",
  size: 24,
  color: theme.colors.background,
}))``;
