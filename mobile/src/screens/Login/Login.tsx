import React from "react";
import { Text } from "react-native";
import { Container, Title, SubTitle } from "./styled";
import { PrimaryButton } from "@components/Buttons/PrimaryButton";


export const Login: React.FC = () => {
  return (
    <Container>
      <Title>AJUDA NOaaaaaaaaaaaIS</Title>
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
