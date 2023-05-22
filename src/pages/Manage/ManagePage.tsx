import React, { useState } from 'react';
import { StyledWrapper } from './ManagePage.styled';
import CategorySelect from './CategorySelect/CategorySelect';
import NoteView from './NoteView/NoteView';
import { CategoryObject, NoteObject } from '../../App';
import NoteCreate from './NoteCreate/NoteCreate';

type ManagePageProps = {
  categories: CategoryObject[];
  notes: NoteObject[];
  setNotes: React.Dispatch<React.SetStateAction<NoteObject[]>>;
};

export default function ManagePage({ categories, notes, setNotes }: ManagePageProps) {
  const [currentCategory, setCurrentCategory] = useState<string>('');

  return (
    <StyledWrapper>
      <CategorySelect categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <NoteView notes={notes} currentCategory={currentCategory} setNotes={setNotes} />
      <NoteCreate categories={categories} setNotes={setNotes} />
    </StyledWrapper>
  );
}
