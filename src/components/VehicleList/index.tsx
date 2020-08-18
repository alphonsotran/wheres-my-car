import React, { ReactNode, Key } from 'react';

import ListItem from './VehicleListItem';
import { VehicleObj } from '../../utils/types';
import { ListContainer } from './styles';

type IProps = {
  children?: ReactNode;
};

type ItemIProps = {
  key?: Key;
  vehicle: VehicleObj;
};

function VehicleList({ children }: IProps): JSX.Element {
  return <ListContainer>{children}</ListContainer>;
}

function Item({ vehicle }: ItemIProps): JSX.Element {
  return <ListItem {...vehicle} />;
}

VehicleList.Item = Item;

export default VehicleList;
