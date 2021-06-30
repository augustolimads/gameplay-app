import React from "react";
import * as S from "./styles";
import { SvgProps } from "react-native-svg";
import { RectButtonProps } from "react-native-gesture-handler";

type CardProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export function Category({ title, icon: Icon, checked, ...rest }: CardProps) {
  return (
    <S.Card {...rest}>
      <S.Content checked={checked}>
        <S.Checkbox checked={checked} />
        <Icon width={48} height={48} />
        <S.CardTitle>{title}</S.CardTitle>
      </S.Content>
    </S.Card>
  );
}
