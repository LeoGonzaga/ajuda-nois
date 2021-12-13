import PrimaryButton from "@components/Buttons/PrimaryButton";
import Spacing from "@components/Spacing";
import Typography from "@components/Typography";
import React from "react";
import { FlatList } from "react-native";
import logo from "../../../assets/initial.png";
import { ButtonWrapper, Container, Header, Logo, PDFFile, Wrapper } from "./styles";


export const Content: React.FC = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const Item = ({ title }: any) => (
    <PDFFile>
      <Typography>{title}</Typography>
    </PDFFile>
  );
  const renderItem = ({ item }: any) => <Item title={item.title} />;
  return (
    <Container>
      <Header>
        <Logo source={logo} resizeMode="contain" />
      </Header>
      <Wrapper>
        <Spacing top={20} />
        <Typography>
          A trigonometria é a área da matemática que estuda a relação entre a
          medida dos lados de um triângulo e seus ângulos. Temos como principais
          razões trigonométricas o seno, o cosseno e a tangente, estudados
          também nos ciclos trigonométricos
        </Typography>

        <Spacing top={20} />
        <Typography bold size={26}>
          Material de apoio
        </Typography>

        <FlatList
          data={DATA}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <Spacing top={10} />
        <Typography bold size={26}>
          Videos
        </Typography>

        <FlatList
          data={DATA}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />

        <Spacing top={10} />
        <Typography bold size={26}>
          Exercícios
        </Typography>
        <Spacing bottom={10} />
        <ButtonWrapper>
          <PrimaryButton text="Iniciar QUIZ" handleClick={() => { }} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};
