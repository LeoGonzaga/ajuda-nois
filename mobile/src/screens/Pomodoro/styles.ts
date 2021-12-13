import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 15px solid ${colors.activeButton};

  justify-content: center;
  align-items: center;
`;

export const Timer = styled.Text`
  font-size: 52px;
`;
export const ContainerTimers = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin: 50px 0px;
`;

export const TimerText = styled.Text`
  font-size: 22px;
  margin-top: 50px;
`;
