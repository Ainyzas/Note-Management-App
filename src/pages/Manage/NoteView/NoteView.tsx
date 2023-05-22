import React from 'react';
import { NoteObject } from '../../../App';
import Note from './Note';

type NoteViewProps = {
  notes: NoteObject[];
  currentCategory: string;
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

export default function NoteView({ notes, currentCategory, setNotes }: NoteViewProps) {
  return (
    <nav>
      {notes &&
        notes
          .filter((note) => note.category.includes(currentCategory))
          .map((note) => <Note key={note._id} _id={note._id} name={note.name} setNotes={setNotes} />)}
    </nav>
  );
}
