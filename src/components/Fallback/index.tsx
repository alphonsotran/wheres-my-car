import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Message, ButtonLink } from './styles';

export const RenderLoading: React.FC = () => (
  <Container>
    <Message>Please wait. Loading...</Message>
  </Container>
);

export const RenderError: React.FC = () => {
  const refresh = () => {
    window.location.reload(false);
  };
  return (
    <Container>
      <Message>Oops. Something went wrong. Please try again.</Message>
      <Message>
        Click{' '}
        <ButtonLink aria-label="Refresh page" onClick={refresh}>
          here
        </ButtonLink>{' '}
        to try again.
      </Message>
    </Container>
  );
};

export const NotAvailable: React.FC = () => {
  const history = useHistory();

  const goBack = () => history.goBack();
  return (
    <Container>
      <Message>Not available in stock</Message>
      <Message>
        Click{' '}
        <ButtonLink aria-label="Go back" onClick={goBack}>
          here
        </ButtonLink>{' '}
        to go back.
      </Message>
    </Container>
  );
};

export const NoResults: React.FC = () => (
  <Container>
    <Message>No results</Message>
  </Container>
);
