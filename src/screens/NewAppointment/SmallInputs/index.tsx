import React from "react";
import * as S from "./styles";

type Props = {
  type: "date" | "time";
  values: [number, number];
};

export function SmallInputs({ type, values }: Props) {
  const DATE = "Dia e mẽs";
  const TIME = "Hora e minuto";
  const operatorType = type === "date" ? "/" : ":";
  const labelType = type === "date" ? DATE : TIME;
  const formatNumber = (value: number) => {
    return value < 10 ? String("0" + value) : String(value);
  };
  return (
    <S.Container>
      <S.Label>{labelType}</S.Label>
      <S.Form>
        <S.Input value={formatNumber(values[0])} />
        <S.Operator>{operatorType}</S.Operator>
        <S.Input value={formatNumber(values[1])} />
      </S.Form>
    </S.Container>
  );
}
