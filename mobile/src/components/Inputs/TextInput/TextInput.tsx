import React from "react";

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
    <Input placeholder={placeholder} value={value} onChangeText={onChange} />
  );
};
