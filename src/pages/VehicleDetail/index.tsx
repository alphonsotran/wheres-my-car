import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Container, Title, Subtitle } from './styles';

const VehicleDetail: React.FC = () => {
  const history = useHistory();
  const {
    state: { vehicle },
  } = useLocation();

  const {
    model,
    make,
    bodyType,
    fuelType,
    enginePowerPS,
    enginePowerKW,
    engineCapacity,
  } = vehicle;

  return (
    <Container>
      <Title>You've found your car!</Title>
      <Subtitle>It took a while, but here it is (we hope)</Subtitle>
      <p>{make}</p>
      <p>{model}</p>
      <p>{bodyType}</p>
      <p>{enginePowerPS}</p>
      <p>{enginePowerKW}</p>
      <p>{fuelType}</p>
      <p>{engineCapacity}</p>
    </Container>
  );
};

export default VehicleDetail;
