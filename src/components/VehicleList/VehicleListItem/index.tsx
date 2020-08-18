import React from 'react';

import Label from '../../Label';
import { VehicleObj } from '../../../utils/types';
import { Item } from './styles';

const VehicleListItem: React.FC<VehicleObj> = (props: VehicleObj) => {
  const {
    model,
    make,
    bodyType,
    fuelType,
    enginePowerPS,
    enginePowerKW,
    engineCapacity,
  } = props;
  return (
    <Item aria-label={`select ${model}`} key={`${{ ...props }}`}>
      <Label input={make} label="Make" />
      <Label input={model} label="Model" />
      <Label input={bodyType} label="Body Type" />
      <Label input={enginePowerPS} label="Engine Power PS" />
      <Label input={enginePowerKW} label="Engine Power KW" />
      <Label input={fuelType} label="Fuel Type" />
      <Label input={engineCapacity} label="Engine Capacity" />
    </Item>
  );
};

export default VehicleListItem;
