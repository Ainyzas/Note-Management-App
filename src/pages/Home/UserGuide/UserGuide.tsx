import React from 'react';
import { StyledGuideDiv, StyledPar } from './UserGuide.styled';

export default function UserGuide() {
  return (
    <StyledGuideDiv>
      <h3>TAKING NOTES</h3>
      <StyledPar>To create a new note you can head to the Manage Page and click the plus sign on the top right.</StyledPar>
      <StyledPar>Notes you create will appear in the middle of the Manage Page and you can delete them as you wish.</StyledPar>
      <StyledPar>You can also assign categories to notes to better organize them.</StyledPar>

      <h3>CREATING NEW CATEGORIES</h3>
      <StyledPar>
        To Create a new category you can find a plus sign at the bottom left of the Manage Page alongside all the current categories above
        it.
      </StyledPar>
      <StyledPar>You can select these categories to see notes specific to the selected category.</StyledPar>
      <StyledPar>If you don't need a category anymore, you can delete it by clicking the symbol to the left of the category.</StyledPar>

      <h3>CHECKING NOTE STATS</h3>
      <StyledPar>You can check stats on how many notes you have taken for each category at the Summary Page.</StyledPar>
    </StyledGuideDiv>
  );
}
