import React from 'react';

import { FormContainer, Input, Label } from './styles';

type IProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
};

const FormField: React.FC<IProps> = ({
  label,
  id,
  value,
  name,
  type,
  placeholder,
  onChange,
}: IProps) => {
  return (
    <FormContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        value={value}
      />
    </FormContainer>
  );
};

export default FormField;
