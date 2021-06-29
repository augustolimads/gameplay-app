import React from "react";
import { Background } from "src/components/Background";
import { CategoryList } from "./CategorySelect";
import * as S from "./styles";
import { HomeHeader } from "./HomeHeader";

export function Home() {
  return (
    <Background>
      <S.Container>
        <HomeHeader />
        <CategoryList />
      </S.Container>
    </Background>
  );
}
