import React from "react";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";
import { categories } from "src/utils/categories.mock";
import { Category } from "../Category";
import { SvgProps } from "react-native-svg";

type CategoryProps = {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function CategorySelect({ categorySelected, setCategory }: Props) {
  const Separator = () => <Spacer isHorizontal size={6} />;
  return (
    <S.Container>
      <S.HorizontalList
        data={categories}
        renderItem={({ item }: CategoryProps) => (
          <Category
            title={item.title}
            icon={item.icon}
            checked={item.id === categorySelected}
            onPress={() => setCategory(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
        ItemSeparatorComponent={Separator}
      />
    </S.Container>
  );
}
