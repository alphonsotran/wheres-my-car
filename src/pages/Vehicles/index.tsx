import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import List from '../../components/List';
import Button from '../../components/Button';
import { Container, Label, ButtonWrapper } from './styles';

const Vehicles: React.FC = () => {
  const history = useHistory();
  const {
    state: { vehicles },
  } = useLocation();

  const navigate = (vehicle) => {
    history.push(`/vehicle`, {
      vehicle,
    });
  };

  const goBack = () => history.goBack();

  return (
    <Container>
      <Label>Choose your vehicle</Label>

      <List>
        {vehicles &&
          vehicles.map((vehicle) => {
            return (
              <div
                key={`${Object.values(vehicle)}`}
                onClick={() => navigate(vehicle)}>
                <List.Item vehicle={vehicle} />
              </div>
            );
          })}
      </List>

      <ButtonWrapper>
        <Button type="button" onClick={goBack} label="Go Back" />
      </ButtonWrapper>
    </Container>
  );
};

export default Vehicles;
