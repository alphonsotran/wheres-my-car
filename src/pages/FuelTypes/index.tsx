import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../../components/useFetch';
import Button from '../../components/Button';
import SelectionList from '../../components/SelectionList';
import {
  NotAvailable,
  RenderError,
  RenderLoading,
} from '../../components/Fallback';
import { sortByType } from '../../utils/filter';
import { useQuery } from '../../components/useQuery';
import { Label, ButtonWrapper } from './styles';

const FuelTypes: React.FC = () => {
  const query = useQuery();
  const make = query.get('make') || '';
  const model = query.get('model') || '';
  const history = useHistory();

  const [fuelTypesDictionary, setFuelTypesDictionary] = useState({});
  const { response, error, isLoading } = useFetch(
    `http://localhost:8080/api/vehicles?make=${make}&model=${model}`,
  );

  useEffect(() => {
    setFuelTypesDictionary(sortByType(response, 'fuelType'));
  }, [response]);

  const navigate = (fuelType) => {
    history.push(`/bodytypes`, { fuelType: fuelTypesDictionary[fuelType] });
  };

  const goBack = () => history.goBack();

  if (error) return <RenderError />;

  if (isLoading) return <RenderLoading />;

  if (response && response.length === 0 && !isLoading) {
    return <NotAvailable />;
  }

  return (
    <SelectionList>
      <Label>Choose your fuel type</Label>

      {fuelTypesDictionary &&
        Object.keys(fuelTypesDictionary).map((fuelType) => {
          return (
            <SelectionList.Item
              key={`${fuelType}`}
              value={fuelType}
              onClick={() => navigate(fuelType)}
            />
          );
        })}

      <ButtonWrapper>
        <Button type="button" onClick={goBack} label="Go Back" />
      </ButtonWrapper>
    </SelectionList>
  );
};

export default FuelTypes;
