import React, { useState } from 'react';
import { createNewCategory, fetchCategories } from '../../../api/categories';
import { CategoryObject } from '../../../App';

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

  return (
    <dialog ref={createRef}>
      <form onSubmit={SubmitHandler}>
        <label>
          Name:
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" pattern=".{2,10}" title="2-10 characters" required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
}
