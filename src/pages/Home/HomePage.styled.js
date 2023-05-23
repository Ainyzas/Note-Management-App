import styled from 'styled-components';

export const StyledWelcomeHeading = styled.h2`
  margin: 3rem auto;
  max-width: max-content;
  text-align: center;
  user-select: none;
  letter-spacing: 0.25rem;
  transition: var(--transition);

  :hover {
    letter-spacing: 0.4rem;
  }
`;
