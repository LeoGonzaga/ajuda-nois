import React, { useState, useCallback } from "react";
import Spacing from "@components/Spacing";
import Typography from "@components/Typography";
import { useNavigation } from "@react-navigation/core";
import { router } from "../../constants/routers";

import { Container, FinishedItem, Item, ListItems, Wrapper } from "./styles";

export const Card = (): JSX.Element => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClick = useCallback((name) => {
    navigation.navigate(router.content, { name });
  }, []);

  const DESCRIPTION =
    "Lorem Ipsum is simply dummy ly dummy ly dummy ly dummy ly dummy text of the printing and typesetting industry.";
  return (
    <>
      <Spacing top={5} />
      <Container onPress={handleToggle} open={open}>
        <Typography bold size={22}>
          Assunto 1
        </Typography>
      </Container>
      {open && (
        <>
          <Spacing top={10} />
          <ListItems>
            <Item onPress={() => handleClick("Tópico 1")}>
              <FinishedItem />
              <Wrapper>
                <Typography bold>Tópico 1</Typography>
                <Typography size={14} color="#ccc">
                  {DESCRIPTION}
                </Typography>
              </Wrapper>
            </Item>

             <Item onPress={() => handleClick("Tópico 2")}>
              <FinishedItem />
              <Wrapper>
                <Typography bold>Tópico 2</Typography>
                <Typography size={14} color="#ccc">
                  {DESCRIPTION}
                </Typography>
              </Wrapper>
            </Item>

             <Item onPress={() => handleClick("Tópico 3")}>
              <FinishedItem />
              <Wrapper>
                <Typography bold>Tópico 3</Typography>
                <Typography size={14} color="#ccc">
                  {DESCRIPTION}
                </Typography>
              </Wrapper>
            </Item>
          </ListItems>
        </>
      )}
    </>
  );
};
