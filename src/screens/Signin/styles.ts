import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
  `}
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
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    text-align: center;
    font-size: 16px;
    margin-bottom: 64px;
  `}
`;
