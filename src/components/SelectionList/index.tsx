import React, { ReactNode } from 'react';

import SelectionListItem, {
  IProps as SelectionListItemProps,
} from './SelectionListItem';
import { SelectionContainer } from './styles';

type IProps = {
  children?: ReactNode;
};

function SelectionList({ children }: IProps): JSX.Element {
  return <SelectionContainer>{children}</SelectionContainer>;
}

function Item(props: SelectionListItemProps): JSX.Element {
  return <SelectionListItem {...props} />;
}

SelectionList.Item = Item;

export default SelectionList;
