import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

export const StyledNoteViewDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-background);
`;

export const StyledNote = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
  font-size: 20px;
  transition: var(--transition);

  p {
    margin: 0;
  }

  :hover {
    background-color: var(--secondary-background);
    color: var(--primary-background);
  }

  :nth-child(1) {
    margin-top: 1rem;
  }
`;

export const StyledNoteDelete = styled(AiFillDelete)`
  transition: var(--transition);

  :hover {
    cursor: pointer;
    opacity: 0.7;
    color: red;
  }
`;
