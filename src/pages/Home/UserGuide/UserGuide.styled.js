import styled from 'styled-components';

export const StyledPar = styled.p`
  margin: 0.3rem 0;
  color: var(--secondary-color);
  font-size: 18px;
  font-weight: 500;
`;

export const StyledGuideDiv = styled.div`
  width: 40%;
  margin: 0 auto;

  h3 {
    user-select: none;
    max-width: max-content;
    margin-top: 4rem;
    letter-spacing: 0.15rem;
    transition: var(--transition);

    :hover {
      letter-spacing: 0.25rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 85%;

    ${StyledPar} {
      font-size: 16px;
    }
  }
`;
