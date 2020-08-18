import styled from 'styled-components';

export const SelectListItem = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: pointer;

  & > p {
    color: ${(props) => props.theme.colors.textColor};
  }

  &:hover {
    background-color: #f5f8fa80;
  }
`;
