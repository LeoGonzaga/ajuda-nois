import styled from "styled-components/native";

type Props = {
  color?: string;
  size?: number;
};

export const Container = styled.Text<Props>`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: ${(props) => (props.size ? `${props.size}px` : "16px")};
`;
