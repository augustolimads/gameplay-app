import React from "react";
import * as S from "../Container.styled";
import { ContainerInsideProps } from "./ContainerInsideProps.type";

export function ContainerWithoutKeyboard({
  children,
  ...rest
}: ContainerInsideProps) {
  return <S.SafeArea {...rest}>{children}</S.SafeArea>;
}
