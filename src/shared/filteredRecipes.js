import { recipes } from "../data/recipe.js";

export let filteredRecipes = Array.from(recipes);

export function updateFilteredRecipes(newFilteredRecipes) {
  filteredRecipes = newFilteredRecipes;
}
