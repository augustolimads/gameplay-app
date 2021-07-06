import React from "react";
import * as S from "./styles";
import DiscordSVG from "src/assets/discord.svg";

type Props = {
  guildId?: string;
  iconId?: string;
};

const CDN_IMAGE = "src";

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}icons/${guildId}/${iconId}.png`;

  return (
    <S.Container>
      {iconId && guildId ? (
        <S.Image source={{ uri }} />
      ) : (
        <DiscordSVG width={48} height={48} />
      )}
    </S.Container>
  );
}
