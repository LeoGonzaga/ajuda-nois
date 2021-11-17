import React, { useState, useCallback } from "react";
import Spacing from "@components/Spacing";
import Typography from "@components/Typography";

import { Container, FinishedItem, Item, ListItems } from "./styles";

export const Card = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
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
              <Typography>Tópico 1</Typography>
              <FinishedItem />
            </Item>

            <Item>
              <Typography>Tópico 1</Typography>
              <FinishedItem />
            </Item>
            <Item>
              <Typography>Tópico 1</Typography>
              <FinishedItem />
            </Item>
          </ListItems>
        </>
      )}
    </>
  );
};
