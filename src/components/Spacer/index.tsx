import React from "react";
import styled from "styled-components/native";
import { Children } from "src/@types/children";

interface SpacerProps {
  size?: number;
  flex?: number;
  isHorizontal?: boolean;
  vertical?: boolean;
  children?: Children;
  marginResult?: string;
}

const SpacerStyle = styled.View<SpacerProps>`
  margin: ${({ marginResult }) => marginResult};
  flex: ${({ flex }) => (flex ? flex : "none")};
`;

export function Spacer({ size, isHorizontal, flex, children }: SpacerProps) {
  const sizeVertical = `${size + "px"} 0`;
  const sizeHorizontal = `0 ${size + "px"}`;
  const margin = isHorizontal ? sizeHorizontal : sizeVertical;
  return (
    <SpacerStyle marginResult={size ? margin : "0"} flex={flex}>
      {children}
    </SpacerStyle>
  );
}
