import React from "react";
import Spacing from "@components/Spacing";
import Typography from "@components/Typography";
import { Image } from "react-native";

import { Container } from "./styles";

type Props = {
  image: any;
  title: string;
  open: () => void;
};
export const SubjectCard = ({ image, title, open }: Props): JSX.Element => {
  return (
    <Container onPress={open}>
      <Image source={image} />
      <Spacing top={5} />
      <Typography>{title}</Typography>
    </Container>
  );
};
