import styled from 'styled-components';
import { AiFillFileAdd } from 'react-icons/ai';

export const StyledNoteCreateDiv = styled.div`
  margin: 1rem 2rem;
  justify-self: flex-start;
`;

export const StyledNoteAdd = styled(AiFillFileAdd)`
  color: var(--primary-background);
  font-size: 32px;
  padding: 0.5rem;
  border: 2px solid var(--primary-background);
  border-radius: 50%;
  transition: var(--transition);

  :hover {
    cursor: pointer;
    opacity: 0.8;
    color: lightblue;
  }
`;
