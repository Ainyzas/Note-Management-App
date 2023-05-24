import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(Link)`
  margin: 0 2rem;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;
