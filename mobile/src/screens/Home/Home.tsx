import Flex from "@components/Flex";
import Spacing from "@components/Spacing";
import SubjectCard from "@components/SubjectCard";
import Typography from "@components/Typography";
import { useNavigation } from "@react-navigation/core";
import React, { useCallback } from "react";
import { FlatList } from "react-native";
import Redacao from "../../../assets/subjects/bio.png";
import Filo from "../../../assets/subjects/filo.png";
import Historia from "../../../assets/subjects/history.png";
import Litera from "../../../assets/subjects/litera.png";
import Mathi from "../../../assets/subjects/math.png";
import Rename1 from "../../../assets/subjects/rename1.png";
import Rename2 from "../../../assets/subjects/rename2.png";
import { colors } from "../../constants/colors";
import { router } from "../../constants/routers";
import { Container } from "./styles";


const DATA = [
  {
    id: "bd7acbea-c1b1-46qc2-a3sed5-3ad53abb28ba",
    title: "Redação",
    image: Redacao,
  },
  {
    id: "3ac68afc-c605-48d3-a43f8-fbd91aa97f63",
    title: "Filosofia",
    image: Filo,
  },
  {
    id: "58694a0f-3da1-471f-2-145571e29d72",
    title: "Matemática",
    image: Historia,
  },
  {
    id: "58694a0f-3da1-471f-bd962-145571e29d72",
    title: "Biologia",
    image: Litera,
  },
  {
    id: "58694a0f-3da1-471f-bd916-145571e29d72",
    title: "História",
    image: Mathi,
  },
  {
    id: "bd7acbea-c1b1-46c2-a3sed5-3ad53abb28ba",
    title: "Inglês",
    image: Rename2,
  },
  {
    id: "3ac68afc-c605-48d3-a43f8-fbd91aa97f63",
    title: "Espanhol",
    image: Rename1,
  },
  {
    id: "58694a0f-3da1-471f-2-145571e29d72",
    title: "Geografia",
    image: Redacao,
  },
  {
    id: "58694a0f-3da1-47s1f-bd962-145571e29d72",
    title: "Física",
    image: Redacao,
  },
  {
    id: "58694a0f-3da1-471f-bd916-145571e29d72",
    title: "Química",
    image: Redacao,
  },
];

export const Home = (): JSX.Element => {
  const navigation = useNavigation();

  const handleClick = useCallback((name) => {
    navigation.navigate(router.details, { name });
  }, []);

  return (
    <Container>
      <Spacing top={20} />
      <Flex align="flex-start">
        <Typography size={26}>O que vamos {"\n"}estudar hoje?</Typography>
        <Spacing top={10} />

        <Typography size={18} bold color={colors.subtitle}>
          Selecione a matéria para começarmos
        </Typography>
        <Spacing bottom={10} />
      </Flex>

      <FlatList
        data={DATA}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: "space-around",
        }}
        renderItem={({ item }) => (
          <SubjectCard
            title={item.title}
            image={item.image}
            open={() => handleClick(item.title)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
