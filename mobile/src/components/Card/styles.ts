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
  padding: 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  margin: 10px;
  background-color: ${colors.secondary};
`;

export const FinishedItem = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: green;
  margin-right: 10px;
`;

export const Wrapper = styled.View`
  width: 90%;
  padding:12px;
`;
