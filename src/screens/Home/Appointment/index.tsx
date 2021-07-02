import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import * as S from "./styles";

type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export function Appointment({ data, ...rest }: Props) {
  const { description, date, category, guild } = data;
  return (
    <S.Container {...rest}>
      <S.Icon />
      <S.Content>
        <S.Header>
          <S.GuildName>{guild.name}</S.GuildName>
          <S.Category>{category}</S.Category>
        </S.Header>
        <S.Body>
          <S.TextIconWrapper>
            <S.DateIcon />
            <S.DateLabel>{date}</S.DateLabel>
          </S.TextIconWrapper>
          <S.TextIconWrapper>
            <S.PersonIcon />
            <S.OwnerLabel>Anfitrião</S.OwnerLabel>
          </S.TextIconWrapper>
        </S.Body>
      </S.Content>
    </S.Container>
  );
}
