import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';

export const StyledCategoryDiv = styled.div`
  width: 100%;
  margin: 1rem 0;
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

  @media screen and (max-width: 768px) {
    font-size: 18px;
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

export const StyledCategoryAddWrapper = styled.div`
  position: relative;
`;

export const StyledCategoryAdd = styled(IoMdAddCircle)`
  position: absolute;
  top: 3rem;
  left: 1rem;
  font-size: 48px;
  color: white;
  transition: var(--transition);

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
