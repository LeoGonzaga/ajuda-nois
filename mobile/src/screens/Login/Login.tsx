import React from "react";
import { Text } from "react-native";
import { Container, LogoApp, Title, SubTitle } from "./styled";
import Logo from "../../../assets/icon.png";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
export const Login: React.FC = () => {
  return (
    <Container>
      <LogoApp source={Logo} width={40} />
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
