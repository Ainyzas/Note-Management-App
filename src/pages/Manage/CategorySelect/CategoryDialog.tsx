import React, { useState } from 'react';
import { createNewCategory, fetchCategories } from '../../../api/categories';
import { CategoryObject } from '../../../App';
import { StyledButtonDiv, StyledForm, StyledModal } from '../ManagePage.styled';

type CategoryDialogProps = {
  createRef: React.RefObject<HTMLDialogElement>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryObject[]>>;
};

export default function CategoryDialog({ createRef, setCategories }: CategoryDialogProps) {
  const [name, setName] = useState<string>('');

  async function SubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await createNewCategory(name);
      if (res && createRef.current) {
        createRef.current.close();
        const data = await fetchCategories();
        setCategories(data);
        setName('');
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
    <StyledModal ref={createRef}>
      <StyledForm onSubmit={SubmitHandler}>
        <label>
          <span>Category: </span>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" pattern=".{2,10}" title="2-10 characters" required />
        </label>

        <StyledButtonDiv>
          <button type="submit">Create Category</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </StyledButtonDiv>
      </StyledForm>
    </StyledModal>
  );
}
