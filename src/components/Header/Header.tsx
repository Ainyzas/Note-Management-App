import React from 'react';
import NavBar from './NavBar/NavBar';
import { StyledHeader, StyledHeaderDiv } from './Header.styled';

export default function index() {
  return (
    <StyledHeader>
      <StyledHeaderDiv>
        <h3>Note Writer</h3>
        <NavBar />
      </StyledHeaderDiv>
    </StyledHeader>
  );
}
