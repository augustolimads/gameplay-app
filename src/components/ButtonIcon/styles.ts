import styled, { css } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    background-color: ${theme.colors.primary};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
  `}
`;

export const IconWrapper = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    border-right-width: 1px;
    border-color: ${theme.colors.line};
  `}
`;

export const DiscordIcon = styled(FontAwesome5).attrs({
  name: "discord",
  size: 24,
  color: "white",
})``;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-size: 16px;
    text-align: center;
  `}
`;
