import React from "react";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const { goBack } = useNavigation();
  // const goBack = () => {};

  return (
    <S.Container onPress={goBack}>
      <S.Icon />
    </S.Container>
  );
}
