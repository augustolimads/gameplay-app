import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 0 24px;
  margin-top: 40px;
`;

export const ListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.title};
  `}
`;

export const HeaderTotal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.textRegular};
    color: ${theme.colors.highlight};
    font-size: ${theme.fontSizes.body};
  `}
`;

export const FlatList = styled.FlatList``;
