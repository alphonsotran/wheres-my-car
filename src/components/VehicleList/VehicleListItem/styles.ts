import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  flex: 1;
  cursor: pointer;
  max-height: 35vh;

  &:hover {
    background-color: #f5f8fa80;
  }
`;
