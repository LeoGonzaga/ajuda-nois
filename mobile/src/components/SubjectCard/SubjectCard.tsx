import { Spacing } from "@components/Spacing";
import { Typography } from "@components/Typography";
import React from "react";
import { Image } from "react-native";

import { Container } from "./styles";

type Props = {
  image: any;
  title: string;
};
export const SubjectCard = ({ image, title }: Props): JSX.Element => {
  return (
    <Container>
      <Image source={image} />
      <Spacing top={5} />
      <Typography>{title}</Typography>
    </Container>
  );
};
