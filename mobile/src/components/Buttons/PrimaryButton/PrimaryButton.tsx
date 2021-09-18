import React from "react";
import { Container, CustomText } from "./style";

type Button = {
  text: string;
};
export const PrimaryButton = ({ text }: Button): JSX.Element => {
  return (
    <Container>
      <CustomText>{text}</CustomText>
    </Container>
  );
};
