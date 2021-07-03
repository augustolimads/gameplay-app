import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled(RectButton)`
  margin-top: 24px;
  border: 1px;
  flex-direction: row;
`;

export const Image = styled.Image`
  margin-right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const Content = styled.View`
  ${({ theme }) => css`
    padding: 4px 24px 12px 8px;
    justify-content: space-between;
    flex: 1;
    border-bottom-width: 1px;
    border-color: ${theme.colors.secondary70};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const GuildName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.title};
  `}
`;
export const Category = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.textRegular};
    color: ${theme.colors.highlight};
    font-size: ${theme.fontSizes.caption};
  `}
`;

export const Body = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const DateLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.textRegular};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.body};
  `}
`;
export const OwnerLabel = styled.Text`
  ${({ theme, isOwner }) => css`
    font-family: ${theme.fontWeights.textMedium};
    color: ${isOwner ? theme.colors.primary : theme.colors.on};
    font-size: ${theme.fontSizes.caption};
  `}
`;

export const TextIconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateIcon = styled(FontAwesome).attrs(({ theme }) => ({
  name: "calendar",
  size: 16,
  color: theme.colors.primary,
}))`
  margin-right: 8px;
`;

export const PersonIcon = styled(Ionicons).attrs(({ theme, isOwner }) => ({
  name: "md-person-sharp",
  size: 16,
  color: isOwner ? theme.colors.primary : theme.colors.on,
}))`
  margin-right: 8px;
`;
