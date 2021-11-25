import Card from "@components/Card";
import React from "react";

import { Container } from "./styles";

export const Details = (): JSX.Element => {
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Container>
      {array.map((elem, index) => (
        <Card key={index} />
      ))}
    </Container>
  );
};
