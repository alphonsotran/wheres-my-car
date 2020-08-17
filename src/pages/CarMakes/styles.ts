import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin: 1rem;
`;

export const SelectDropdown = styled.select`
  color: '#fff';
`;

export const MakeContainer = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
  }
`;
