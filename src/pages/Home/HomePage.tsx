import React from 'react';
import UserGuide from './UserGuide/UserGuide';
import { StyledWelcomeHeading } from './HomePage.styled';

export default function HomePage() {
  return (
    <div>
      <StyledWelcomeHeading>WELCOME TO MY NOTE CREATION SITE</StyledWelcomeHeading>
      <UserGuide />
    </div>
  );
}
