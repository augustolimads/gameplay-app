import React, { useState } from "react";
import { CategorySelect } from "src/components/CategorySelect";
import { Background } from "src/components/Background";
import { ServerSelectButton } from "./ServerSelectButton";
import { SmallInputs } from "./SmallInputs";
import * as S from "./styles";

export function NewAppointment() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  return (
    <Background>
      <S.Container>
        <S.Title>Categoria</S.Title>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
        <ServerSelectButton />
        <S.Form>
          <S.DateTimeWrapper>
            <SmallInputs type="date" values={[12, 5]} />
            <SmallInputs type="time" values={[12, 5]} />
          </S.DateTimeWrapper>
        </S.Form>
      </S.Container>
    </Background>
  );
}
