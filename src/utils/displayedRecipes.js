import { recipes } from "../data/recipe.js";

function getDisplayedRecipes() {
  const recipeCards = document.querySelectorAll(".recipe-card");
  return Array.from(recipeCards).map((card) => {
    const recipeName = card.dataset.name;
    return recipes.find((recipe) => recipe.name === recipeName);
  });
}

getDisplayedRecipes();
