import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../../components/useFetch';
import FormField from '../../components/FormField';
import SelectionList from '../../components/SelectionList';
import { Nullable } from '../../utils/types';
import {
  NoResults,
  NotAvailable,
  RenderError,
  RenderLoading,
} from '../../components/Fallback';
import { InputWrapper, Label } from './styles';

const CarMakes: React.FC = () => {
  const history = useHistory();

  const [carMakesList, updateMakesList] = useState<Nullable<any[]>>(null);
  const [input, updateInput] = useState('');
  const { response: carMakesData, error, isLoading } = useFetch(
    'http://localhost:8080/api/makes',
  );

  useEffect(() => updateMakesList(carMakesData), [carMakesData]);

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCarMakes =
      carMakesData && carMakesData.length > 0
        ? [...carMakesData].filter((make) =>
            make.toLowerCase().includes(e.target.value.toLowerCase()),
          )
        : null;

    updateMakesList(filteredCarMakes);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInput(e.target.value);
    filterList(e);
  };

  const navigate = (make) => {
    history.push(`/models?make=${make.toLowerCase()}`);
  };

  if (error) return <RenderError />;

  if (isLoading) return <RenderLoading />;

  if (carMakesData && carMakesData.length === 0 && !isLoading) {
    return <NotAvailable />;
  }

  return (
    <SelectionList>
      <InputWrapper>
        <FormField
          type="text"
          id="filter"
          name="filterInput"
          value={input}
          onChange={handleChange}
          label="Filter"
          placeholder="Type to narrow down"
        />
      </InputWrapper>

      <Label>Choose the make</Label>

      {carMakesList && carMakesList.length > 0 ? (
        carMakesList.map((make) => {
          return (
            <SelectionList.Item
              key={`${make}`}
              value={make}
              onClick={() => navigate(make)}></SelectionList.Item>
          );
        })
      ) : (
        <NoResults />
      )}
    </SelectionList>
  );
};

export default CarMakes;
