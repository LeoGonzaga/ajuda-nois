import Typography from "@components/Typography";
import React from "react";
import { Image, Share } from "react-native";
import eletron from "../../../../../assets/eletron.png";
import { Container, Content } from "./styles";
const Card: React.FC = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error?.message);
    }
  };
  return (
    <Container onPress={onShare}>
      <Image source={eletron} width={100} />
      <Content>
        <Typography size={22} color="#FFC13A" bold>
          Parabens!
        </Typography>
        <Typography>
          Você conseguiu resolver todos os exercícios essa semana!
        </Typography>
      </Content>
    </Container>
  );
};

export default Card;
