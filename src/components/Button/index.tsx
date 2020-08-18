import React from 'react';

import { ButtonComponent } from './styles';

type IProps = {
  onClick: () => void;
  label: string;
  type?: 'button' | 'submit';
};

const Button: React.FC<IProps> = ({ onClick, label, type }: IProps) => {
  return (
    <ButtonComponent type={type} onClick={onClick}>
      {label}
    </ButtonComponent>
  );
};

export default Button;
