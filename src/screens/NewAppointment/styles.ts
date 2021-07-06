import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding-top: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    font-size: ${theme.fontSizes.h3};
    color: ${theme.colors.heading};
    padding: 16px 24px;
  `}
`;

export const Form = styled.View`
  padding: 16px 24px;
`;

export const DateTimeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
