import styled from "styled-components/native";
import { colors } from "../../../constants/colors";

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${colors.activeButton};
  height: 66px;
  width: 90%;
  text-align: center;
  margin: 0 5px;
  display: flex;
  justify-content: center;
`;

export const CustomText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
