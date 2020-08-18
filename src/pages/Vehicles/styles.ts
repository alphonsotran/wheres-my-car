import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  box-sizing: border-box;
  height: 100%;
  margin: 1rem;
`;

export const MakeContainer = styled.div`
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;

export const Label = styled.h4`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 0 25vw;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    padding: 0 25vw;
  }
`;
