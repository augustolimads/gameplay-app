import React from "react";
import { Platform, Keyboard } from "react-native";
import * as S from "../Container.styled";
import { ContainerInsideProps } from "./ContainerInsideProps.type";

export function ContainerWithKeyboard({
  children,
  ...rest
}: ContainerInsideProps) {
  return (
    <S.InvisibleButton onPress={() => Keyboard.dismiss()}>
      <S.SafeArea {...rest}>
        <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>
          {children}
        </S.Keyboard>
      </S.SafeArea>
    </S.InvisibleButton>
  );
}
