import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  & > * {
    margin: 1rem 0;
  }

  @media (min-width: 768px) {
    padding: 0 25vw;
  }
`;
