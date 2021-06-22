import React from "react";
import * as S from "./styles";
import IllustrationImg from "src/assets/illustration.png";
import { ButtonIcon } from "src/components/ButtonIcon";

export function Signin() {
  return (
    <S.Container>
      <S.Image source={IllustrationImg} />
      <S.Content>
        <S.Title>
          Organize{`\n`}
          suas jogatinas {`\n`}
          facilmente
        </S.Title>
        <S.Subtitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </S.Subtitle>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </S.Content>
    </S.Container>
  );
}
