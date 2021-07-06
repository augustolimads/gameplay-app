import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";

export function HomeHeader() {
  const navigation = useNavigation();

  function handleCreateNewAppointment() {
    navigation.navigate("NewAppointment");
  }

  return (
    <S.Header>
      <S.AvatarWrapper>
        <S.Avatar
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </S.AvatarWrapper>
      <S.Group>
        <S.Heading>
          Olá, <S.HeadingBold>Augusto</S.HeadingBold>
        </S.Heading>
        <S.Text>Hoje é dia de vitória</S.Text>
      </S.Group>
      <Spacer flex={1} />
      <S.Button onPress={handleCreateNewAppointment}>
        <S.IconPlus />
      </S.Button>
    </S.Header>
  );
}
