import React, { useState } from "react";
import { Background } from "src/components/Background";
import { CategorySelect } from "src/components/CategorySelect";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";
import { HomeHeader } from "./HomeHeader";
import { AppointmentList } from "./AppoinmentList";

export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <S.Container>
        <HomeHeader />
        <Spacer vertical size={20} />
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <AppointmentList />
      </S.Container>
    </Background>
  );
}
