import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import SelectionList from '../../components/SelectionList';
import Button from '../../components/Button';
import { sortByType } from '../../utils/filter';
import { Label, ButtonWrapper } from './styles';

const EngineCapacity: React.FC = () => {
  const [engineCapacityDictionary, setEngineCapacityDictionary] = useState({});
  const history = useHistory();
  const {
    state: { bodyType: vehicles },
  } = useLocation();

  useEffect(() => {
    setEngineCapacityDictionary(sortByType(vehicles, 'engineCapacity'));
  }, [vehicles]);

  const goBack = () => history.goBack();

  const navigate = (engineCapacity) => {
    history.push(`/vehicles`, {
      vehicles: engineCapacityDictionary[engineCapacity],
    });
  };

  return (
    <SelectionList>
      <Label>Choose your engine capacity</Label>

      {engineCapacityDictionary &&
        Object.keys(engineCapacityDictionary).map((engineCapacity) => {
          return (
            <SelectionList.Item
              key={`${engineCapacity}`}
              value={engineCapacity}
              onClick={() => navigate(engineCapacity)}
            />
          );
        })}
      <ButtonWrapper>
        <Button type="button" onClick={goBack} label="Go Back" />
      </ButtonWrapper>
    </SelectionList>
  );
};

export default EngineCapacity;
