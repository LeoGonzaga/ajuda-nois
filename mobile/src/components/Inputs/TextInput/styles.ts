import styled from "styled-components/native";
import { colors } from "../../../constants/colors";
export const Input = styled.TextInput`
  border: none;
  padding: 5px;
  width: 95%;
  height: 55px;
  border-radius: 10px;
  background-color: ${colors.inputBackground};
  color: ${colors.inputColor};
  &::placeholder {
    color: ${colors.inputColor};
  }
`;
