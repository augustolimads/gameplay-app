import React from "react";
import { GuildIcon } from "../GuildIcon";
import * as S from "./styles";

export function ServerSelectButton() {
  return (
    <S.Container>
      <S.DiscordWrapper>
        <GuildIcon />
      </S.DiscordWrapper>
      <S.Text>Selecione um servidor</S.Text>
      <S.IconArrow />
    </S.Container>
  );
}
