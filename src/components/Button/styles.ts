import styled from 'styled-components';

export const ButtonComponent = styled.button`
  min-width: 88px;
  height: 38px;
  padding: 10px 20px;
  border-radius: 4px;
  opacity: 1;
  cursor: pointer;
  outline: none;

  background: #f2f2f2;
  border: 1px solid #f2f2f2;
  color: #4c4c4c;

  &:hover {
    color: #131313;
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
  }

  &:active {
    color: #131313;
    background: #bfbfbf;
    border: 1px solid #bfbfbf;
  }
`;
