import { VehicleObj, VehicleKeys } from './types';

export const sortByType = (list: VehicleObj[], type: VehicleKeys) => {
  if (!list) return null;

  return list.reduce((accum, curr) => {
    accum[curr[type]] = [...(accum[curr[type]] || []), curr];
    return accum;
  }, {});
};
