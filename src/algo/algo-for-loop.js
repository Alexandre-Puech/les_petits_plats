import { recipes } from "../data/recipe.js";
import { normalizeString } from "./../utils/string.js";

const userSearch = document.getElementById("userSearch").value;

const normalizedUserSearch = normalizeString(userSearch);

export function filterRecipes(normalizedUserSearch, recipes) {
  if (userSearch.length < 3) {
    return;
  }
  const filteredRecipes = new Set();

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    if (recipe.name.includes(normalizedUserSearch)) {
      filteredRecipes.add(recipe);
    }

    if (recipe.description.includes(normalizedUserSearch)) {
      filteredRecipes.add(recipe);
    }

    for (let j = 0; j < recipe.ingredients.length; j++) {
      const ing = recipe.ingredients[j];
      if (ing.ingredient.includes(normalizedUserSearch)) {
        filteredRecipes.add(recipe);
      }
    }

    return Array.from(filteredRecipes);
  }
}

filterRecipes(normalizedUserSearch, recipes);
