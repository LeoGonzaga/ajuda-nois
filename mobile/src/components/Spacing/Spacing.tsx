import React from "react";

import { Container } from "./styles";

type Sizes = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};
export const Spacing = ({ top, bottom, left, right }: Sizes): JSX.Element => {
  return <Container top={top} bottom={bottom} left={left} right={right} />;
};
