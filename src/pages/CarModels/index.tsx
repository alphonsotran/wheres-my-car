import React from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../../components/useFetch';
import SelectionList from '../../components/SelectionList';
import Button from '../../components/Button';
import { useQuery } from '../../components/useQuery';
import {
  NotAvailable,
  RenderError,
  RenderLoading,
} from '../../components/Fallback';
import { Label, ButtonWrapper } from './styles';

const CarModels: React.FC = () => {
  const query = useQuery();
  const make = query.get('make') || '';
  const history = useHistory();

  const { response: carModels, error, isLoading } = useFetch(
    `http://localhost:8080/api/models?make=${make}`,
  );

  const navigate = (model) => {
    history.push(
      `/fueltypes?make=${make.toLowerCase()}&model=${model.toLowerCase()}`,
    );
  };

  const goBack = () => history.goBack();

  if (error) return <RenderError />;

  if (isLoading) return <RenderLoading />;

  if (carModels && carModels.length === 0 && !isLoading) {
    return <NotAvailable />;
  }

  return (
    <SelectionList>
      <Label>Choose your model</Label>

      {carModels &&
        carModels.map((model) => {
          return (
            <SelectionList.Item
              key={`${model}`}
              value={model}
              onClick={() => navigate(model)}
            />
          );
        })}

      <ButtonWrapper>
        <Button type="button" onClick={goBack} label="Go Back" />
      </ButtonWrapper>
    </SelectionList>
  );
};

export default CarModels;
