import React from "react";
import { Typography } from "@components/Typography";

import { Container } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Typography color="red" size={30}>Value</Typography>
    </Container>
  );
};
