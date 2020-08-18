import React from 'react';

import { LabelWrapper, LabelText } from './styles';

type IProps = {
  label: string;
  input: string | number;
};

const Label: React.FC<IProps> = ({ label, input }: IProps) => {
  return (
    <LabelWrapper>
      <LabelText>{label}</LabelText>
      <p>{input}</p>
    </LabelWrapper>
  );
};

export default Label;
