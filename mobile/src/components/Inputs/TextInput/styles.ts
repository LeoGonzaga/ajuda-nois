import styled from "styled-components/native";
import { colors } from "../../../constants/colors";
export const Input = styled.TextInput`
  border: none;
  padding:5px 10px;
  height: 55px;
  margin:0px 2px;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 100%;
  background-color: ${colors.inputBackground};
  color: ${colors.inputColor};
  &::placeholder {
    color: ${colors.inputColor};
  }
`;
