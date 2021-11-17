import React from "react";
import { Container } from "./styles";

type Props = {
  color?: string;
  size?: number;
  children: React.ReactNode;
  bold?:boolean;
};
export const Typography = ({ color, size, children,bold }: Props): JSX.Element => {
  return (
    <Container color={color} size={size} bold={bold}>
      {children}
    </Container>
  );
};
