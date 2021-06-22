import styled, { css } from "styled-components/native";

type Weigth = "regular" | "bold";

type AttrsProps = {
  weight: Weigth;
};

type TextProps = {
  size?: number;
  weight?: Weigth;
};

const weights = {
  regular: "Lato_400Regular",
  bold: "Lato_700Bold",
};

export const Text = styled.Text.attrs(({ weight }: AttrsProps) => ({
  style: { fontFamily: weights[weight] || weights.regular },
}))`
  ${({ size, weight }: TextProps) => css`
    font-size: ${size || 16}px;
    font-weight: ${weight || "regular"};
  `}
`;
