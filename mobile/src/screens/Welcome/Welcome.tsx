import React from "react";
import { View } from "react-native";
import PrimaryButton from "@components/Buttons/PrimaryButton";
import Spacing  from "@components/Spacing";
import useWelcome from "./useWelcome";

import logo from "../../../assets/initial.png";
import { Container, Title, SubTitle, Logo } from "./styles";

export const Welcome: React.FC = () => {
  const { handleClick } = useWelcome();
  return (
    <Container>
      <View>
        <Spacing top={50} />
        <Logo source={logo} resizeMode="contain" />
        <Title>Oi, Léo!</Title>
        <Title>Seja bem-vindo(a)!</Title>
        <SubTitle>Explore nosso app e bons estudos!</SubTitle>
      </View>
      <PrimaryButton text="VAMOS LÁ" handleClick={handleClick} />
    </Container>
  );
};

export default Welcome;
