import React from "react";
import { Container } from "./styles";

type Props = {
  color?: string;
  size?: number;
  children: any;
};
export const Typography = ({ color, size, children }: Props): JSX.Element => {
  return (
    <Container color={color} size={size}>
      {children}
    </Container>
  );
};
