import React from "react";
import { Container, CustomText } from "./style";

type Button = {
  text: string;
  handleClick: () => any;
};
export const PrimaryButton = ({ text, handleClick }: Button): JSX.Element => {
  return (
    <Container onPress={handleClick}>
      <CustomText>{text}</CustomText>
    </Container>
  );
};
