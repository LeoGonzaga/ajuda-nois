import styled from "styled-components/native";
import { colors } from "../../constants/colors";

type Props = {
  direction?: string;
  justify?: string;
  align?: string;
  background?: string;
  width?: number;
};

export const Container = styled.View<Props>`
  background-color: ${(props) =>
    props.background ? props.background : colors.primary};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;
