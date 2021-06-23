import React from "react";
import * as S from "./styles";

import { Background } from "src/components/Background";

export function Home() {
  return (
    <Background>
      <S.Container>
        <S.Header>
          {/* <S.Avatar /> */}
          <S.Group>
            <S.Heading>Olá, Augusto</S.Heading>
            <S.Text>Hoje é dia de vitória</S.Text>
          </S.Group>
          <S.Button>
            {/* <S.PlusButton /> */}
          </S.Button>
        </S.Header>
      </S.Container>
    </Background>
  );
}
