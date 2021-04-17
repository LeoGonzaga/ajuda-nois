import styled from "styled-components/native";
import { colors } from "../../colors/colors";

export const Container = styled.View`
  background-color: ${colors.primary};
  display: flex;
  flex: 1;
  align-items: center;
`;

export const LogoApp = styled.Image`
  width: 50%;
  height: 40%;
`;

export const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 240px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const SubTitle = styled.TouchableOpacity`
  margin-top: 20px;
`;
