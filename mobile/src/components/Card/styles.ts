import styled from "styled-components/native";
import { colors } from "../../constants/colors";

type Props = {
  open?: boolean;
};
export const Container = styled.TouchableOpacity<Props>`
  background-color: ${colors.activeButton};
  height: 70px;
  width: ${(props) => (props.open ? "100%" : "90%")};

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-top: 10px;
  justify-content: center;
  padding: 20px;
`;

export const ListItems = styled.View`
  margin: 0px 12px 0px 12px;
`;

export const Item = styled.TouchableOpacity`
  height: 45px;
  margin: 0px 10px 10px 10px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 4px;
`;

export const FinishedItem = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: green;
`;
