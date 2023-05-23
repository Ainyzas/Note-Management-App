import React from 'react';
import { NoteObject } from '../../../App';
import Note from './Note';
import { StyledNoteViewDiv } from './NoteView.styled';

type NoteViewProps = {
  notes: NoteObject[];
  currentCategory: string;
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

export default function NoteView({ notes, currentCategory, setNotes }: NoteViewProps) {
  return (
    <StyledNoteViewDiv>
      {notes &&
        notes
          .filter((note) => note.category.includes(currentCategory))
          .map((note) => <Note key={note._id} _id={note._id} name={note.name} setNotes={setNotes} />)}
    </StyledNoteViewDiv>
  );
}
