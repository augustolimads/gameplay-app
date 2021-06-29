import React from "react";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";

export function HomeHeader() {
  return (
    <S.Header>
      <S.AvatarWrapper>
        <S.Avatar
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </S.AvatarWrapper>
      <S.Group>
        <S.Heading>
          Olá, <S.HeadingBold>Augusto</S.HeadingBold>
        </S.Heading>
        <S.Text>Hoje é dia de vitória</S.Text>
      </S.Group>
      <Spacer flex={1} />
      <S.Button>
        <S.IconPlus />
      </S.Button>
    </S.Header>
  );
}
