import React from "react";
import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import { Center } from "src/components/Center";
// import * as S from './styles';

export const Main = () => {
  return (
    <Container>
      <Center>
        <Text size={40} weight="bold">
          oi mundo
        </Text>
      </Center>
    </Container>
  );
};
