import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';

export const StyledCategoryDiv = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem;
  padding-bottom: 8rem;

  .active {
    background-color: var(--secondary-color);

    :hover {
      opacity: 1;
    }
  }
`;

export const StyledCategorySelect = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  user-select: none;
  font-size: 20px;
  font-weight: 500;
  color: white;
  transition: var(--transition);

  :hover {
    background-color: var(--secondary-color);
    opacity: 0.7;
  }

  span {
    margin-left: 2rem;

    :nth-child(1) {
      margin-left: 0;
      letter-spacing: 0.15rem;
    }
  }
`;

export const StyledCategoryDelete = styled(AiFillDelete)`
  transition: var(--transition);

  :hover {
    cursor: pointer;
    opacity: 0.7;
    color: red;
  }
`;

export const StyledCategoryAdd = styled(IoMdAddCircle)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 48px;
  color: white;
  transition: var(--transition);

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
