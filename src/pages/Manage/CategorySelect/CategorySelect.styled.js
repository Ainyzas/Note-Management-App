import styled from 'styled-components';

export const StyledCategoryDiv = styled.div`
  .active {
    background-color: grey;

    :hover {
      opacity: 1;
    }
  }
`;

export const StyledCategorySelect = styled.div`
  user-select: none;
  color: white;
  background-color: black;
  :hover {
    opacity: 0.8;
  }
`;

export const StyledCategoryDeleteButton = styled.button`
  :hover {
    cursor: pointer;
  }
`;

export const StyledCategoryAdd = styled.button``;
