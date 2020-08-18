import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  background: whitesmoke;
  border: 1px solid #cccccc;
  border-radius: 4px;
  opacity: 1;
  height: 1rem;
  font-size: 15px;
  outline: none;

  &::placeholder {
    font-style: italic;
  }

  &:hover {
    background: #f5f8fa;
    border: 1px solid lightgray;
  }

  &:focus {
    background: #fff;
    border: 1px solid blue;
  }
`;

export const Label = styled.label`
  margin: 10px 0;
  color: gray;
`;
