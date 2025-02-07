import { normalizeString } from "./../utils/string.js";

export function filterRecipes(userSearch, recipes) {
  if (userSearch.length < 3) {
    return;
  }

  const normalizedUserSearch = normalizeString(userSearch);
  const filteredRecipes = new Set();

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    if (normalizeString(recipe.name).includes(normalizedUserSearch)) {
      filteredRecipes.add(recipe);
    }

    if (normalizeString(recipe.description).includes(normalizedUserSearch)) {
      filteredRecipes.add(recipe);
    }

    if (normalizeString(recipe.appliance).includes(normalizedUserSearch)) {
      filteredRecipes.add(recipe);
    }

    // if (normalizeString(recipe.ustensils).includes(normalizedUserSearch)) {
    //   filteredRecipes.add(recipe);
    // }

    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ing = recipe.ingredients[j];
      if (normalizeString(ing.ingredient).includes(normalizedUserSearch)) {
        filteredRecipes.add(recipe);
      }
    }

    for (let k = 0; k < recipe.ustensils.length; k++) {
      const ust = recipe.ustensils[k];
      if (normalizeString(ust).includes(normalizedUserSearch)) {
        filteredRecipes.add(recipe);
      }
    }
  }
  return Array.from(filteredRecipes);
}
