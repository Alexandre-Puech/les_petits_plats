import { recipes } from "../data/recipe.js";

const userSearch = "coco";

function filterRecipes(userSearch, recipes) {
  //step 1: titre
  const matchingNameArray = recipes.filter((recipe) => {
    return recipe.name.includes(userSearch);
  });

  // step 2: ingrédients
  const matchingIngredientsArray = recipes.filter((recipe) => {
    // return true quand on a au moins un des ingredients qui match
    const matchingRecipedIngredients = recipe.ingredients.filter((ingredient) =>
      ingredient.ingredient.includes(userSearch)
    );
    return matchingRecipedIngredients.length > 0;
  });

  // step3: description
  const matchingDescriptionArray = recipes.filter((recipe) => {
    return recipe.description.includes(userSearch);
  });

  // step4: enlever doublon
  const result = [
    ...matchingNameArray,
    ...matchingIngredientsArray,
    ...matchingDescriptionArray,
  ];
  console.log(result);
  return new Set(result);

  // return final
}
console.log("hello");
console.log(filterRecipes(userSearch, recipes));

// TODO: voir la casse
// userSearch > 3 caractères
// transformer le Set en array
