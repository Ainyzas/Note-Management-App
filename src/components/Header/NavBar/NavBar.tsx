import React from 'react';
import { StyledLink, StyledNav } from './NavBar.styled';

export default function NavBar() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/manage">Manage</StyledLink>
      <StyledLink to="/summary">Summary</StyledLink>
    </StyledNav>
  );
}
