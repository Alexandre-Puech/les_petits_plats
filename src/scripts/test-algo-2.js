import { recipes } from "../data/recipe.js";

const userSearch = "Concombre";

function filterRecipes(userSearch, recipes) {
  const filteredRecipes = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    let nameIsValid = false;
    let descriptionIsValid = false;
    let ingredientIsValid = false;

    // Check if the user's search is in the name
    for (let j = 0; j < recipe.name.length; j++) {
      if (recipe.name.includes(userSearch)) {
        nameIsValid = true;
        break;
      }
    }

    // Check if the user's search is in the description
    for (let k = 0; k < recipe.description.length; k++) {
      if (recipe.description.includes(userSearch)) {
        descriptionIsValid = true;
        break;
      }
    }

    // Check if the user's search is in the ingredients
    for (let l = 0; l < recipe.ingredients.length; l++) {
      const ingredient = recipe.ingredients[l].ingredient;
      for (let m = 0; m < ingredient.length; m++) {
        if (ingredient.includes(userSearch)) {
          ingredientIsValid = true;
          break;
        }
      }
      if (ingredientIsValid) break;
    }

    if (nameIsValid || descriptionIsValid || ingredientIsValid) {
      filteredRecipes.push(recipe);
    }
  }

  return filteredRecipes;
}

console.log(filterRecipes(userSearch, recipes));
