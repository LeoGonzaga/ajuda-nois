import React, { useState, useCallback } from "react";
import Spacing from "@components/Spacing";
import Typography from "@components/Typography";

import { Container, FinishedItem, Item, ListItems, Wrapper } from "./styles";
import { View } from "react-native";

export const Card = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const DESCRIPTION ="Lorem Ipsum is simply dummy ly dummy ly dummy ly dummy ly dummy text of the printing and typesetting industry."
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
            <Item>
              <FinishedItem />
              <Wrapper>
                <Typography bold>Tópico 1</Typography>
                <Typography size={14} color="#ccc">
                  {DESCRIPTION}
                </Typography>
              </Wrapper>
            </Item>

            <Item>
              <FinishedItem />
              <Wrapper>
                <Typography bold>Tópico 1</Typography>
                <Typography size={14} color="#ccc">
                  {DESCRIPTION}
                </Typography>
              </Wrapper>
            </Item>

            <Item>
              <FinishedItem />
              <Wrapper>
                <Typography bold>Tópico 1</Typography>
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
