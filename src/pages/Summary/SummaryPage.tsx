import React from 'react';
import { CategoryObject, NoteObject } from '../../App';
import { StyledSummaryDiv, StyledTable, StyledTableCell, StyledTableHeader, StyledTableRow } from './SummaryPage.styled';

type SummaryPageProps = {
  categories: CategoryObject[];
  notes: NoteObject[];
};

export default function SummaryPage({ categories, notes }: SummaryPageProps) {
  const categoryNoteCounts = categories.map((category) => {
    const noteCount = notes.filter((note) => note.category === category.name || category.name === '').length;
    return {
      category: category.name !== '' ? category.name : 'All',
      noteCount: noteCount,
    };
  });

  return (
    <StyledSummaryDiv>
      <StyledTable>
        <thead>
          <StyledTableRow>
            <StyledTableHeader>CATEGORY</StyledTableHeader>
            <StyledTableHeader>NOTE COUNT</StyledTableHeader>
          </StyledTableRow>
        </thead>
        <tbody>
          {categoryNoteCounts.map((categoryNote, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{categoryNote.category}</StyledTableCell>
              <StyledTableCell>{categoryNote.noteCount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledSummaryDiv>
  );
}
