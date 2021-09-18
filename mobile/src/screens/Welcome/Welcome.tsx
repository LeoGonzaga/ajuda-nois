import React from "react";
import { View } from "react-native";
import { Container, Title, SubTitle } from "./styles";
import { PrimaryButton } from "@components/Buttons/PrimaryButton";
// import SvgComponent from "@components/Svg/SvgComponent";
import { Spacing } from "@components/Spacing";
 import useWelcome from "./useWelcome";

export const Welcome: React.FC = () => {
   const { handleClick } = useWelcome();
  return (
    <Container>
      <View>
        {/* <SvgComponent /> */}
        <Spacing top={20} />
        <Title>Oi, Léo!</Title>
        <Title>Seja bem-vindo(a)!</Title>
        <SubTitle>Explore nosso app e bons estudos!</SubTitle>
      </View>
      <PrimaryButton text="VAMOS LÁ" handleClick={handleClick} />
    </Container>
  );
};

export default Welcome;
