import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;
  padding: 1rem;
  background: ${(props) => props.theme.colors.titleBackground};
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
  color: ${(props) => props.theme.colors.textColor};

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
