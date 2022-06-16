export const checkCategory = (categories, category) => {
  if (
    categories.find(
      (elto) =>
        elto.toLowerCase().split(' ').join('') ===
        category.toLowerCase().split(' ').join('')
    )
  )
    return true;
  return false;
};
