import React, { useState, useRef } from 'react';
import { CategoryObject, NoteObject } from '../../../App';
import { createNewNote, fetchNotes } from '../../../api/notes';
import { StyledNoteAdd, StyledNoteCreateDiv } from './NoteCreate.styled';

type NoteCreateProps = {
  categories: CategoryObject[];
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

export default function NoteCreate({ categories, setNotes }: NoteCreateProps) {
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const createRef = useRef<HTMLDialogElement>(null);

  function createButtonHandler() {
    if (createRef.current) {
      createRef.current.showModal();
    }
  }

  async function SubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await createNewNote(name, category);
      if (res && createRef.current) {
        createRef.current.close();
        const data = await fetchNotes();
        setNotes(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledNoteCreateDiv>
        <StyledNoteAdd onClick={createButtonHandler}>Create</StyledNoteAdd>
      </StyledNoteCreateDiv>

      <dialog ref={createRef}>
        <form onSubmit={SubmitHandler}>
          <label>
            Name:
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" pattern=".{5,50}" title="5-50 characters" required />
          </label>

          <label>
            Category:
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Submit</button>
        </form>
      </dialog>
    </>
  );
}
