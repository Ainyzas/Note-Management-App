import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';

export const StyledNoteViewDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-background);
`;

export const StyledNoteDelete = styled(AiFillDelete)`
  transition: var(--transition);
  font-size: 22px;

  :hover {
    cursor: pointer;
    opacity: 0.7;
    color: red;
  }
`;

export const StyledNote = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  font-size: 20px;
  transition: var(--transition);

  p {
    max-width: 75%;
    margin: 0;
    word-break: break-word;
  }

  :hover {
    background-color: var(--secondary-background);
    color: var(--primary-background);
  }

  :nth-child(1) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
