import styled, { css } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;
export const Group = styled.View``;

export const AvatarWrapper = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.secondary50, theme.colors.secondary70],
}))`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 8px;
`;
export const Heading = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleMedium};
    font-size: 24px;
    color: ${theme.colors.heading};
  `}
`;
export const HeadingBold = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    font-weight: bold;
    color: ${theme.colors.heading};
  `}
`;
export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.textRegular};
    font-size: 14px;
    color: ${theme.colors.highlight};
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: 16px;
    border-radius: 12px;
    background-color: ${theme.colors.primary};
  `}
`;
export const IconPlus = styled(Entypo).attrs(({ theme }) => ({
  name: "plus",
  size: 24,
  color: theme.colors.heading,
}))``;
