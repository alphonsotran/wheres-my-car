import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: space-between;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0 25vw;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.h4`
  text-align: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0;
  align-self: center;
`;
