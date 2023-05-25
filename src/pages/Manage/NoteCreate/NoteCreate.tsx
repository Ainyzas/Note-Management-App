import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { CategoryObject, NoteObject } from '../../../App';
import { createNewNote, fetchNotes } from '../../../api/notes';
import { StyledNoteAdd, StyledNoteCreateDiv } from './NoteCreate.styled';
import { StyledButtonDiv, StyledForm, StyledModal } from '../ManagePage.styled';

type NoteCreateProps = {
  categories: CategoryObject[];
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

type NoteCreateFormInputs = {
  name: string;
  category: string;
};

export default function NoteCreate({ categories, setNotes }: NoteCreateProps) {
  const { register, handleSubmit, reset } = useForm<NoteCreateFormInputs>();

  const createRef = useRef<HTMLDialogElement>(null);

  function createButtonHandler() {
    if (createRef.current) {
      createRef.current.showModal();
    }
  }

  async function SubmitHandler(data: NoteCreateFormInputs) {
    try {
      const res = await createNewNote(data.name, data.category);
      if (res && createRef.current) {
        createRef.current.close();
        const data = await fetchNotes();
        setNotes(data);
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function cancelHandler() {
    if (createRef.current) {
      createRef.current.close();
    }
  }

  return (
    <>
      <StyledNoteCreateDiv>
        <StyledNoteAdd onClick={createButtonHandler}></StyledNoteAdd>
      </StyledNoteCreateDiv>

      <StyledModal ref={createRef}>
        <StyledForm onSubmit={handleSubmit(SubmitHandler)}>
          <label>
            <span>Note: </span>
            <input {...register('name')} type="text" pattern=".{5,50}" title="5-50 characters" required />
          </label>

          <label>
            <span>Category: </span>
            <select {...register('category')}>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <StyledButtonDiv>
            <button type="submit">Create Note</button>
            <button type="button" onClick={cancelHandler}>
              Cancel
            </button>
          </StyledButtonDiv>
        </StyledForm>
      </StyledModal>
    </>
  );
}
