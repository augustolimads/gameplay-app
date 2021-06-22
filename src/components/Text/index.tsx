import React from "react";
import { Children } from "src/@types/children";
import * as S from "./Text.styled";

type TextProps = {
  children: Children;
  size?: number;
  weight?: "regular" | "bold";
};

export function Text({ children, size, weight }: TextProps) {
  return (
    <S.Text size={size} weight={weight}>
      {children}
    </S.Text>
  );
}
