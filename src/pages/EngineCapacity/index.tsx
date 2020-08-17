import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { sortByType } from '../../utils/filter';
import { Container, MakeContainer } from './styles';

const EngineCapacity: React.FC = () => {
  const [engineCapacityDictionary, setEngineCapacityDictionary] = useState({});
  const history = useHistory();
  const {
    state: { bodyType: vehicles },
  } = useLocation();

  useEffect(() => {
    setEngineCapacityDictionary(sortByType(vehicles, 'engineCapacity'));
  }, [vehicles]);

  const navigate = (engineCapacity) => {
    history.push(`/vehicles`, {
      vehicles: engineCapacityDictionary[engineCapacity],
    });
  };

  return (
    <Container>
      {engineCapacityDictionary &&
        Object.keys(engineCapacityDictionary).map((engineCapacity) => {
          return (
            <MakeContainer
              key={`${engineCapacity}`}
              onClick={() => navigate(engineCapacity)}>
              {engineCapacity}
            </MakeContainer>
          );
        })}
    </Container>
  );
};

export default EngineCapacity;
