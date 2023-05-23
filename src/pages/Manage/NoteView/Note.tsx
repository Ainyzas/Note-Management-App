import React from 'react';
import { deleteNote, fetchNotes } from '../../../api/notes';
import { NoteObject } from '../../../App';
import { StyledNote, StyledNoteDelete } from './NoteView.styled';

type NoteProps = {
  _id: string;
  name: string;
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

export default function Note({ _id, name, setNotes }: NoteProps) {
  async function deleteHandler(id: string) {
    try {
      await deleteNote(id);
      const data = await fetchNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledNote>
      <p>{name}</p>
      <StyledNoteDelete onClick={() => deleteHandler(_id)}>Delete</StyledNoteDelete>
    </StyledNote>
  );
}
