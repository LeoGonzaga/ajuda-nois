import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Container = styled.SafeAreaView`
  background-color: ${colors.primary};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  margin-top: 20px;
  color: ${colors.subtitle};
`;
