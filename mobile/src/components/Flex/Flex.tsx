import React from "react";

import { Container } from "./styles";

type Props = {
  direction?: string;
  justify?: string;
  align?: string;
  width?: number;
  background?: string;
  children: any;
};

export const Flex = ({
  align,
  direction,
  justify,
  width,
  children,
}: Props): JSX.Element => {
  return (
    <Container
      align={align}
      direction={direction}
      justify={justify}
      width={width}
    >
      {children}
    </Container>
  );
};
