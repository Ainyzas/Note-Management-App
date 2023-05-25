import React from 'react';
import { useForm } from 'react-hook-form';
import { createNewCategory, fetchCategories } from '../../../api/categories';
import { CategoryObject } from '../../../App';
import { StyledButtonDiv, StyledForm, StyledModal } from '../ManagePage.styled';

type CategoryDialogProps = {
  createRef: React.RefObject<HTMLDialogElement>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryObject[]>>;
};

type CategoryCreateFormInputs = {
  name: string;
};

export default function CategoryDialog({ createRef, setCategories }: CategoryDialogProps) {
  const { register, handleSubmit, reset } = useForm<CategoryCreateFormInputs>();

  async function SubmitHandler(data: CategoryCreateFormInputs) {
    try {
      const res = await createNewCategory(data.name);
      if (res && createRef.current) {
        createRef.current.close();
        const data = await fetchCategories();
        setCategories(data);
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
    <StyledModal ref={createRef}>
      <StyledForm onSubmit={handleSubmit(SubmitHandler)}>
        <label>
          <span>Category: </span>
          <input {...register('name')} type="text" pattern=".{2,10}" title="2-10 characters" required />
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
