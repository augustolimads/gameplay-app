import React from "react";
import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.IconWrapper>
        <S.DiscordIcon />
      </S.IconWrapper>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
