import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import SelectionList from '../../components/SelectionList';
import Button from '../../components/Button';
import { sortByType } from '../../utils/filter';
import { Label, ButtonWrapper } from './styles';

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

  const goBack = () => history.goBack();

  return (
    <SelectionList>
      <Label>Choose a body type</Label>

      {bodyTypesDictionary &&
        Object.keys(bodyTypesDictionary).map((bodyType) => {
          return (
            <SelectionList.Item
              key={`${bodyType}`}
              value={bodyType}
              onClick={() => navigate(bodyType)}
            />
          );
        })}

      <ButtonWrapper>
        <Button type="button" onClick={goBack} label="Go Back" />
      </ButtonWrapper>
    </SelectionList>
  );
};

export default BodyTypes;
