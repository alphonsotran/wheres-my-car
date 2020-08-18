import React from 'react';

import { SelectListItem } from './styles';

export type IProps = {
  onClick: () => void;
  value: string;
};

const SelectionListItem: React.FC<IProps> = ({ onClick, value }: IProps) => {
  return (
    <SelectListItem onClick={onClick}>
      <p>{value}</p>
    </SelectListItem>
  );
};

export default SelectionListItem;
