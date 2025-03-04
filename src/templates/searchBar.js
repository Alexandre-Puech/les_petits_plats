import { recipes } from "../data/recipe.js";
import { filterRecipes } from "../algo/algo-array-method.js";
import { displayCards } from "./recipe-card.js";
import { updateDropdowns } from "./fillingDropdown.js";
import { updateRecipesCount } from "./recipesCount.js";
import { updateFilteredRecipes } from "../shared/filteredRecipes.js";
import { filteredRecipes } from "../shared/filteredRecipes.js";

const searchButton = document.getElementById("button-search");
const closeButton = document.getElementById("close-button");
const userSearchInput = document.getElementById("userSearch");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const userSearch = document.getElementById("userSearch").value;
  updateFilteredRecipes(filterRecipes(userSearch, filteredRecipes));
  if (filteredRecipes.length === 0) {
    const cardsContainer = document.getElementById("recipe-cards");
    cardsContainer.innerHTML = `<h2 class=noRecipes> Aucune recette ne contient ${userSearch}, vous pouvez chercher "Tarte aux pommes", "poisson", etc.</h2>`;
    updateDropdowns();
    updateRecipesCount();
  } else {
    displayCards(filteredRecipes);
    updateDropdowns();
    updateRecipesCount();
  }
});

userSearchInput.addEventListener("input", (event) => {
  const userSearch = event.target.value;
  if (userSearch.length >= 3) {
    closeButton.style.display = "block";
    updateFilteredRecipes(filterRecipes(userSearch, filteredRecipes));
    displayCards(filteredRecipes);
    if (filteredRecipes.length === 0) {
      const cardsContainer = document.getElementById("recipe-cards");
      cardsContainer.innerHTML = `<h2 class=noRecipes> Aucune recette ne contient ${userSearch}, vous pouvez chercher "Tarte aux pommes", "poisson", etc.</h2>`;
      updateDropdowns();
      updateRecipesCount();
    } else {
      updateDropdowns();
      updateRecipesCount();
    }
  } else {
    closeButton.style.display = "none";
    displayCards(recipes);
    updateDropdowns();
    updateRecipesCount();
  }
});

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("userSearch").value = "";
  closeButton.style.display = "none";
  updateFilteredRecipes(filteredRecipes);
  displayCards(filteredRecipes);
  updateDropdowns();
  updateRecipesCount();
});
