import React, { useState } from 'react';
import { StyledWrapper } from './ManagePage.styled';
import CategorySelect from './CategorySelect/CategorySelect';
import NoteView from './NoteView/NoteView';
import { CategoryObject, NoteObject } from '../../App';
import NoteCreate from './NoteCreate/NoteCreate';

type ManagePageProps = {
  notes: NoteObject[];
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
  categories: CategoryObject[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryObject[]>>;
};

export default function ManagePage({ notes, setNotes, categories, setCategories }: ManagePageProps) {
  const [currentCategory, setCurrentCategory] = useState<string>('');

  return (
    <StyledWrapper>
      <CategorySelect
        categories={categories}
        setCategories={setCategories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <NoteView notes={notes} currentCategory={currentCategory} setNotes={setNotes} />
      <NoteCreate categories={categories} setNotes={setNotes} />
    </StyledWrapper>
  );
}
