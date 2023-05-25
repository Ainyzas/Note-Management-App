import styled, { keyframes } from 'styled-components';

export const StyledWrapper = styled.div`
  width: 70%;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 2fr 7fr 1fr;
  justify-items: center;
  background-color: var(--secondary-background);
  border: 2px solid var(--secondary-background);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const zoomIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledModal = styled.dialog`
  animation: ${zoomIn} 0.5s;
  margin: 15rem auto;
  border: transparent;
  border-radius: 10px;

  ::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const StyledForm = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-size: 18px;
  font-weight: 500;

  input,
  select {
    padding: 0.15rem 0.5rem;
    outline: none;
    background-color: var(--primary-background);
    border: 2px solid gainsboro;
    border-radius: 7px;
    font-size: 16px;
    transition: var(--transition);

    :focus {
      border-color: var(--secondary-background);
    }
  }
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  gap: 1rem;

  button {
    font-size: 16px;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    color: var(--primary-background);
    background-color: var(--secondary-color);
    border: transparent;
    border-radius: 6px;
    transition: var(--transition);

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
