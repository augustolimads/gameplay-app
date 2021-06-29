import React from "react";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";
import { categories } from "src/utils/categories.mock";

type CardProps = {
  item: {
    name: string;
  };
};

export function CategoryList() {
  const HorizontalListCard = ({ item }) => (
    <S.Card>
      <S.CardTitle>{item.name}</S.CardTitle>
    </S.Card>
  );

  const Separator = () => <Spacer isHorizontal size={4} />;
  return (
    <S.Container>
      <S.HorizontalList
        data={categories}
        renderItem={HorizontalListCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      />
    </S.Container>
  );
}
