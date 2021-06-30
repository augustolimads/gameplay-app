import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from "react-native-svg";
import { ThemeProps } from "~/theme";

type CategoryProps = {
  theme: ThemeProps;
  checked?: boolean;
};

export const Card = styled(RectButton)`
  border-radius: 12px;
  min-width: 128px;
`;

export const Content = styled.View`
  ${({ theme, checked }) => css`
    opacity: ${checked ? 1 : 0.4};
    border: 2px;
    background-color: ${theme.colors.secondary60};
    border-color: ${theme.colors.secondary30};
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-radius: 12px;
    height: 160px;
  `}
`;

export const Checkbox = styled.View`
  ${({ theme, checked }) => css`
    height: ${checked ? "10px" : "12px"};
    width: ${checked ? "10px" : "12px"};
    margin-bottom: 4px;
    border: ${checked ? "0px" : "1px"};
    border-radius: 2px;
    align-self: flex-end;
    border-color: ${theme.colors.secondary30};
    background-color: ${checked
      ? theme.colors.primary
      : theme.colors.secondary100};
  `}
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeights.titleBold};
    color: ${theme.colors.heading};
    font-size: ${theme.fontSizes.title};
    margin: 24px 0px;
  `}
`;

// export const LinearWrapper = styled(LinearGradient).attrs(
//   ({ theme }: CategoryProps) => ({
//     colors: [theme.colors.secondary50, theme.colors.secondary70],
//   })
// )``;
