import React from 'react';
import { CategoryObject, NoteObject } from '../../App';
import { StyledSummaryDiv, StyledTable, StyledTableCell, StyledTableHeader, StyledTableRow } from './SummaryPage.styled';

type SummaryPageProps = {
  categories: CategoryObject[];
  notes: NoteObject[];
};

export default function SummaryPage({ categories, notes }: SummaryPageProps) {
  const categoryNoteCounts = categories.map((category) => {
    const noteCount = notes.filter((note) => note.category === category.name).length;
    return {
      category: category.name !== '' ? category.name : 'Uncategorized',
      noteCount: noteCount,
    };
  });

  const totalNotes = notes.length;

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
          <StyledTableRow>
            <StyledTableCell>Total</StyledTableCell>
            <StyledTableCell>{totalNotes}</StyledTableCell>
          </StyledTableRow>

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
