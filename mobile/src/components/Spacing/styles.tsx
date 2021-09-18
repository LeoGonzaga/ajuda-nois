import styled from "styled-components/native";

type Sizes = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};
export const Container = styled.View<Sizes>`
  margin-top: ${(props) => (props.top ? `${props.top}px` : "0px")};
  margin-bottom: ${(props) => (props.bottom ? `${props.bottom}px` : "0px")};
  margin-left: ${(props) => (props.left ? `${props.left}px` : "0px")};
  margin-right: ${(props) => (props.right ? `${props.right}px` : "0px")};
  background-color: red;
`;
