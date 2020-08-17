import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../../components/useFetch';
import { RenderLoading, RenderError } from '../../helpers/boundaries';
import { sortByType } from '../../utils/filter';
import { useQuery } from '../../components/useQuery';
import { Container, MakeContainer } from './styles';

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

  if (error) return <RenderError />;

  if (isLoading) return <RenderLoading />;

  if (response && response.length === 0 && !isLoading) {
    return <p>Not available in stock</p>;
  }

  return (
    <Container>
      {fuelTypesDictionary &&
        Object.keys(fuelTypesDictionary).map((fuelType) => {
          return (
            <MakeContainer
              key={`${fuelType}`}
              onClick={() => navigate(fuelType)}>
              {fuelType}
            </MakeContainer>
          );
        })}
    </Container>
  );
};

export default FuelTypes;
