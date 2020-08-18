import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  padding: 5rem 1rem 0rem 1rem;
  background: ${(props) => props.theme.colors.titleBackground};
`;

export const Message = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
`;

export const ButtonLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-family: arial, sans-serif;
  color: #069;
  text-decoration: underline;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
