import React from "react";
import { Text } from "react-native";
import { Container, LogoApp, Title, SubTitle } from "./styled";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { SvgComponent } from "../../components/Svg";
export const Login: React.FC = () => {
  return (
    <Container>
      <SvgComponent/>
      <Title>AJUDA NOIS</Title>
      <PrimaryButton />
      <SubTitle>
        <Text>
          Ainda não tem conta? <Text>Clique aqui</Text>{" "}
        </Text>
      </SubTitle>
    </Container>
  );
};

export default Login;
