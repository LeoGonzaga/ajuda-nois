import React from "react";
import { Container, Title, SubTitle } from "./styled";
import { PrimaryButton } from "@components/Buttons/PrimaryButton";
import SvgComponent from "@components/Svg/SvgComponent";
import { View } from "react-native";

export const Login: React.FC = () => {
  return (
    <Container>
      <View>
        <SvgComponent />
        <Title>Oi, Léo!</Title>
        <Title>Seja bem-vindo(a)!</Title>
        <SubTitle>Explore nosso app e bons estudos!</SubTitle>
      </View>
      <PrimaryButton />
    </Container>
  );
};

export default Login;
