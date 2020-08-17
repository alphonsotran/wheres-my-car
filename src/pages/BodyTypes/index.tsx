import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { sortByType } from '../../utils/filter';
import { Container, MakeContainer } from './styles';

const BodyTypes: React.FC = () => {
  const [bodyTypesDictionary, setBodyTypesDictionary] = useState({});
  const history = useHistory();
  const {
    state: { fuelType: vehicles },
  } = useLocation();

  useEffect(() => {
    setBodyTypesDictionary(sortByType(vehicles, 'bodyType'));
  }, [vehicles]);

  const navigate = (bodyType) => {
    history.push(`/enginecapacity`, {
      bodyType: bodyTypesDictionary[bodyType],
    });
  };

  return (
    <Container>
      {bodyTypesDictionary &&
        Object.keys(bodyTypesDictionary).map((bodyType) => {
          return (
            <MakeContainer
              key={`${bodyType}`}
              onClick={() => navigate(bodyType)}>
              {bodyType}
            </MakeContainer>
          );
        })}
    </Container>
  );
};

export default BodyTypes;
