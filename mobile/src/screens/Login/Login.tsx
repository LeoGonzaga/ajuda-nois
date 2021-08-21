import React from "react";
import { Text } from "react-native";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import { Container, LogoApp, Title, Wrapper, SubTitle } from "./styled";
import Logo from "../../../assets/icon.png";
export const Login: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <LogoApp source={Logo} width={40} />
        <Title>AJUDA NOIS</Title>
        <PrimaryButton />
        <SubTitle>
          <Text>Ainda não tem conta? Clique aqui</Text>
        </SubTitle>
      </Wrapper>
    </Container>
  );
};

export default Login;
