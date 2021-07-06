import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    border: 1px;
    border-color: ${theme.colors.secondary50};
    border-radius: 8px;
    margin: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    overflow: hidden;
  `}
`;

export const DiscordWrapper = styled.View`
  ${({ theme }) => css`
    border: 1px;
    border-color: ${theme.colors.secondary50};
    background-color: ${theme.colors.secondary50};
    border-radius: 8px;
    width: 64px;
    height: 68px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    font-size: ${theme.fontSizes.title};
    color: ${theme.colors.highlight};
  `}
`;

export const IconArrow = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "keyboard-arrow-right",
  size: 24,
  color: theme.colors.heading,
}))``;
