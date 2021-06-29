import React from "react";
import * as S from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
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
