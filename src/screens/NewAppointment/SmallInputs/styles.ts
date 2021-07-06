import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.title};
    margin-bottom: 12px;
  `}
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({})`
  ${({ theme }) => css`
    border: 2px;
    border-radius: 8px;
    height: 64px;
    width: 64px;
    font-family: ${theme.fontWeights.textRegular};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.title};
    background-color: ${theme.colors.secondary70};
    border-color: ${theme.colors.secondary50};
    justify-content: center;
    text-align: center;
  `}
`;

export const Operator = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.textRegular};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.title};
    margin: 0px 6px;
  `}
`;
