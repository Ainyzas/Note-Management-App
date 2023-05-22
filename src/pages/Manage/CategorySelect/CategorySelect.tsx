import React from 'react';
import { CategoryObject } from '../../../App';

type CategorySelectProps = {
  categories: CategoryObject[];
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function CategorySelect({ categories, currentCategory, setCurrentCategory }: CategorySelectProps) {
  return (
    <div>
      {categories &&
        categories.map((category) => (
          <button
            key={category._id}
            className={currentCategory === category.name ? 'active' : ''}
            onClick={() => setCurrentCategory(category.name)}>
            {category.name !== '' ? category.name : 'All'}
          </button>
        ))}
    </div>
  );
}
