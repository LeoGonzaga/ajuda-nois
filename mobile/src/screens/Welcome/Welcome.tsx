import PrimaryButton from "@components/Buttons/PrimaryButton";
import Spacing from "@components/Spacing";
import React from "react";
import { View } from "react-native";
import logo from "../../../assets/initial.png";
import { Container, Logo, SubTitle, Title } from "./styles";
import useWelcome from "./useWelcome";


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
