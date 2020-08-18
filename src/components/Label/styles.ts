import styled from 'styled-components';

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.titleBackground};

  & > p {
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const LabelText = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.colors.textColor};
`;
