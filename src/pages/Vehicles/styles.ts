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
