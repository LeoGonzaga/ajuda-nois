import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Container = styled.TouchableOpacity`
  width: 176px;
  height: 176px;
  border-radius: 10px;
  background-color: ${colors.subjectBackground};
  margin: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
