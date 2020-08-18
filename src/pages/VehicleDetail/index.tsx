import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import {
  Container,
  Title,
  Subtitle,
  HeaderWrapper,
  ButtonWrapper,
} from './styles';
import VehicleListItem from '../../components/VehicleList/VehicleListItem';

const VehicleDetail: React.FC = () => {
  const history = useHistory();
  const {
    state: { vehicle },
  } = useLocation();

  const goHome = () => history.push('/');

  return (
    <Container>
      <HeaderWrapper>
        <Title>You&apos;ve found your car!</Title>
        <Subtitle>
          It took a while, but here it is (we hope{' '}
          <span role="img" aria-label="car emoji">
            🤞
          </span>
          )
        </Subtitle>
      </HeaderWrapper>

      <VehicleListItem {...vehicle} />

      <ButtonWrapper>
        <Button type="button" onClick={goHome} label="Look again" />
      </ButtonWrapper>
    </Container>
  );
};

export default VehicleDetail;
