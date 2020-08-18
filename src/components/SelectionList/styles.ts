import styled from 'styled-components';

export const SelectionContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.titleBackground};
  min-height: 100vh;
  height: 100%;

  @media (min-width: 768px) {
    padding: 0 25vw;
    padding-bottom: 1rem;
  }
`;
