import React from "react";
import * as S from "./styles";
import IllustrationImg from "src/assets/illustration.png";
import { ButtonIcon } from "src/components/ButtonIcon";
import { Background } from "src/components/Background";
import { useNavigation } from "@react-navigation/native";

export function Signin() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <Background>
      <S.Container>
        <S.Image source={IllustrationImg} />
        <S.Content>
          <S.Title>
            Conecte-se{`\n`}e organize suas {`\n`}jogatinas
          </S.Title>
          <S.Subtitle>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </S.Subtitle>
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </S.Content>
      </S.Container>
    </Background>
  );
}
