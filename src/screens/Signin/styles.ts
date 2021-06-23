import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: "stretch",
})`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.h1};
    font-family: ${theme.fontWeights.titleBold};
    text-align: center;
    margin-bottom: 16px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.body};
    text-align: center;
    margin-bottom: 64px;
  `}
`;
