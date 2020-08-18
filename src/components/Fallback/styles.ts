import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 20vh;
  justify-content: center;
  padding: 0 1rem;
`;

export const Message = styled.h3`
  text-align: center;
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
