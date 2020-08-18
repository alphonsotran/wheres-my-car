import styled from 'styled-components';

export const Title = styled.h1`
  flex: 1;
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.textColor};
`;

export const TitleWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.titleBackground};
  box-shadow: 0px 2px 4px #4c4c4c24;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
