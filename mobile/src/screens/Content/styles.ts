import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.primary};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${colors.activeButton};
  height: 200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Wrapper = styled.View`
  padding: 10px;
`;

export const PDFFile = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  width: 150px;
  height: 150px;
  margin: 10px 10px 10px 0px;
  border-radius: 4px;
  padding: 10px;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
`;
