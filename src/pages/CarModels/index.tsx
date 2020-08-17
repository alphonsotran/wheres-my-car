import React from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../../components/useFetch';
import { useQuery } from '../../components/useQuery';
import { RenderLoading, RenderError } from '../../helpers/boundaries';
import { Container, MakeContainer } from './styles';

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

  if (error) return <RenderError />;

  if (isLoading) return <RenderLoading />;

  if (carModels && carModels.length === 0 && !isLoading) {
    return <p>Not available in stock</p>;
  }

  return (
    <Container>
      {carModels &&
        carModels.map((model) => {
          return (
            <MakeContainer key={`${model}`} onClick={() => navigate(model)}>
              {model}
            </MakeContainer>
          );
        })}
    </Container>
  );
};

export default CarModels;
