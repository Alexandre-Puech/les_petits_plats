import { recipes } from "../data/recipe.js";
import { filterRecipes } from "../algo/algo-for-loop.js";
import { displayCards } from "./recipe-card.js";
import { updateDropdowns } from "./fillingDropdown.js";
import { updateRecipesCount } from "./recipesCount.js";

// export const mainSearchBar = document.getElementById("mainSearchBar");
// export let userSearch = "";
const searchButton = document.getElementById("button-search");
const closeButton = document.getElementById("close-button");
const userSearchInput = document.getElementById("userSearch");

// export function getUserSearch() {
//   mainSearchBar.addEventListener("input", (event) => {
//     if (event.target.value.length >= 3) {
//       userSearch = event.target.value;
//     }
//   });
//   return userSearch;
// }

// function displayFilteredRecipes(filteredRecipes) {
//   const container = document.getElementById("recipe-cards");
//   container.innerHTML = "";
//   filteredRecipes.forEach((recipe) => {
//     const recipeCard = createRecipeCard(recipe);
//     container.appendChild(recipeCard);
//   });
// }

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userSearch = document.getElementById("userSearch").value;
  const filteredRecipes = filterRecipes(userSearch, recipes);
  displayCards(filteredRecipes);
  updateDropdowns();
  updateRecipesCount();
});

userSearchInput.addEventListener("input", (event) => {
  if (event.target.value.length >= 3) {
    closeButton.style.display = "block";
  } else {
    closeButton.style.display = "none";
  }
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("userSearch").value = "";
  closeButton.style.display = "none";
  displayCards(recipes);
  updateDropdowns();
  updateRecipesCount();
});
