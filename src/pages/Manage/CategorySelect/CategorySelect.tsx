import React, { useRef } from 'react';
import { CategoryObject } from '../../../App';
import { StyledCategoryAdd, StyledCategoryDeleteButton, StyledCategoryDiv, StyledCategorySelect } from './CategorySelect.styled';
import CategoryDialog from './CategoryDialog';
import { deleteCategory, fetchCategories } from '../../../api/categories';

type CategorySelectProps = {
  categories: CategoryObject[];
  setCategories: React.Dispatch<React.SetStateAction<CategoryObject[]>>;
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function CategorySelect({ categories, setCategories, currentCategory, setCurrentCategory }: CategorySelectProps) {
  const createRef = useRef<HTMLDialogElement>(null);

  function createCategoryButtonHandler() {
    if (createRef.current) {
      createRef.current.showModal();
    }
  }

  async function deleteCategoryButtonHandler(id: string) {
    try {
      await deleteCategory(id);
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledCategoryDiv>
      {categories &&
        categories.map((category) => (
          <StyledCategorySelect
            key={category._id}
            className={currentCategory === category.name ? 'active' : ''}
            onClick={() => setCurrentCategory(category.name)}>
            <StyledCategoryDeleteButton onClick={() => deleteCategoryButtonHandler(category._id)}>Del</StyledCategoryDeleteButton>
            {category.name !== '' ? category.name : 'All'}
          </StyledCategorySelect>
        ))}

      <StyledCategoryAdd onClick={createCategoryButtonHandler}>Add Category</StyledCategoryAdd>
      <CategoryDialog createRef={createRef} setCategories={setCategories} />
    </StyledCategoryDiv>
  );
}
