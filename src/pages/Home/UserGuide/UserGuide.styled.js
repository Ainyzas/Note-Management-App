import styled from 'styled-components';

export const StyledGuideDiv = styled.div`
  width: 40%;
  margin: 0 auto;

  h3 {
    user-select: none;
    max-width: max-content;
    margin-top: 4rem;
    letter-spacing: 0.15rem;
    transition: all 400ms ease;

    :hover {
      letter-spacing: 0.25rem;
    }
  }
`;

export const StyledPar = styled.p`
  margin: 0.15rem 0;
  color: var(--secondary-color);
  font-size: 18px;
  font-weight: 500;
`;
