import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View``;

export const HorizontalList = styled.FlatList`
  flex: none;
  padding: 0px 20px;
  margin-top: 40px;
`;

export const Card = styled(RectButton)`
  border: 1px;
  height: 130px;
  padding: 12px;
  border-radius: 12px;
`;
export const CardTitle = styled.Text``;
