import React, { useState } from "react";

import { Container } from "./styles";
import { Flex } from "@components/Flex/Flex";
import { Typography } from "@components/Typography";
import { TextInput } from "@components/Inputs/TextInput";
import { SubjectCard } from "@components/SubjectCard";
import { FlatList, SafeAreaView, Text } from "react-native";
import { colors } from "../../constants/colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-a3sed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a43f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-2-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd962-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd916-145571e29d72",
    title: "Third Item",
  },
];
export const Home = (): JSX.Element => {
  const [text, setText] = useState("");

  const handle = (value: any) => {
    console.log(value);
    setText(value);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.primary, alignItems: "center", marginTop:40, padding:10 }}
    >
      <Flex align="flex-start">
        <Typography size={28}>O que vamos {"\n"}estudar hoje?</Typography>
        <Typography size={20}>Selecione a matéria para começarmos</Typography>
        <Typography size={20}>{text}</Typography>
      </Flex>
      <TextInput
        placeholder="Seleciona a matéria"
        value={text}
        onChange={handle}
      />
      <FlatList
        data={DATA}
        renderItem={() => (
          <Flex direction="row">
            <SubjectCard />
            <SubjectCard />
          </Flex>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
