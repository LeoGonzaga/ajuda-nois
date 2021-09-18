import { ReactNode } from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { Container } from "./styles";

type Props = {
  color?: string;
  size?: number;
  children: ReactNode;
};
export const Typography = ({ color, size, children }: Props): JSX.Element => {
  return (
    <Container color={color} size={size}>
      {children}
    </Container>
  );
};
