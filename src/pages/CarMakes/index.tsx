import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../../components/useFetch';
import { Nullable } from '../../utils/types';
import { RenderLoading, RenderError } from '../../helpers/boundaries';
import { Container, MakeContainer } from './styles';

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
    return <p>Not available in stock</p>;
  }

  return (
    <Container>
      <label htmlFor="filter">
        Filter
        <input
          type="text"
          id="filter"
          name="filterInput"
          value={input}
          onChange={handleChange}
        />
      </label>

      {carMakesList && carMakesList.length > 0 ? (
        carMakesList.map((make) => {
          return (
            <MakeContainer key={`${make}`} onClick={() => navigate(make)}>
              {make}
            </MakeContainer>
          );
        })
      ) : (
        <p>No results</p>
      )}
    </Container>
  );
};

export default CarMakes;
