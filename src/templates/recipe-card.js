import { recipes } from "../data/recipe.js";

//I need 3 functions for my cards

//1: create the ingredients part of the card
function getIngredients(ingredients) {
  return ingredients
    .map(
      (ingredient) =>
        `<li>
          <div class="ingredient-name">${ingredient.ingredient}</div>
          <div class="ingredient-quantity">${ingredient.quantity || ""} ${
          ingredient.unit || ""
        }</div>
        </li>`
    )
    .join("");
}

function createIngredientsList(ingredients) {
  return `<ul>${getIngredients(ingredients)}</ul>`;
}

//2: create the card itself
export function createRecipeCard({
  image,
  name,
  time,
  description,
  ingredients,
  appliance,
  ustensils,
}) {
  return `<div class="recipe-card">
      <img src="${image}" alt="${name}">
      <div class="card-content">
        <h3 class="card-title">${name}</h3>
        <div class="card-text">
        <div class="card-description">
        <p class="card-subtitle">RECETTE</p>
        <p class="recipe-description">${description}</p>
        </div>
        <div class="card-ingredients">
        <p class="card-subtitle">INGRÉDIENTS</p>
        ${createIngredientsList(ingredients)}
        </div>
        </div>
        <div class="card-time">
        <p>${time}min</p>
        </div>
        <div class="hidden-appliance hidden">${appliance}</div>
        <div class="hidden-ustensils hidden">${ustensils.join(", ")}</div>
      </div>
    </div>`;
}

//3: display all the cards
document.addEventListener("DOMContentLoaded", () => {
  displayCards(recipes);
});

export function displayCards(recipes) {
  const container = document.getElementById("recipe-cards");
  container.innerHTML = recipes
    .map((recipe) => createRecipeCard(recipe))
    .join("");
}
