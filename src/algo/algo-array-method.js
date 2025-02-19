import { normalizeString } from "./../utils/string.js";

export function filterRecipes(userSearch, recipes) {
  if (userSearch.length < 3) {
    return;
  }

  const normalizedUserSearch = normalizeString(userSearch);

  const matchingNameArray = recipes.filter((recipe) => {
    const normalizedName = normalizeString(recipe.name);
    return normalizedName.includes(normalizedUserSearch);
  });

  const matchingIngredientsArray = recipes.filter((recipe) => {
    const matchingRecipedIngredients = recipe.ingredients.filter(
      (ingredient) => {
        const normalizedIngredient = normalizeString(ingredient.ingredient);
        return normalizedIngredient.includes(normalizedUserSearch);
      }
    );
    return matchingRecipedIngredients.length > 0;
  });

  const matchingDescriptionArray = recipes.filter((recipe) => {
    const normalizedDescription = normalizeString(recipe.description);
    return normalizedDescription.includes(normalizedUserSearch);
  });

  const result = [
    ...matchingNameArray,
    ...matchingIngredientsArray,
    ...matchingDescriptionArray,
  ];
  return Array.from(new Set(result));
}
