export type VehicleObj = {
  make: string;
  model: string;
  enginePowerPS: number;
  enginePowerKW: number;
  fuelType: string;
  bodyType: string;
  engineCapacity: number;
};

export type VehicleKeys = keyof VehicleObj;

export type Nullable<T> = T | null;

export type FetchHook = {
  response: any;
  error: string;
  isLoading: boolean;
};
