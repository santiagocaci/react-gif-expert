import { useState } from 'react';
import { checkCategory } from './helpers/checkCategory';
import { AddCategory, GifGrid } from './react-components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {
    // si newCategory esta categories retorna true
    if (checkCategory(categories, newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif ExpertApp</h1>
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
