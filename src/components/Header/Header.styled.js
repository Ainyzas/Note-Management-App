import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--primary-color);
`;

export const StyledHeaderDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    letter-spacing: 0.1rem;
    user-select: none;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
