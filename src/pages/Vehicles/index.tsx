import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import List from '../../components/List';
import { Container } from './styles';

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

  return (
    <Container>
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
    </Container>
  );
};

export default Vehicles;
