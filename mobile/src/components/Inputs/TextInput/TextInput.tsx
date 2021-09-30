import React from "react";
import { colors } from "../../../constants/colors";

import { Input } from "./styles";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (e: any) => any;
};

export const TextInput = ({
  placeholder,
  onChange,
  value,
}: Props): JSX.Element => {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={colors.inputColor}
      value={value}
      onChangeText={onChange}
    />
  );
};
