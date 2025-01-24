import { recipes } from "../data/recipe.js";

// Appliances dropdownb
function fillAppliancesDropdown(recipes) {
  const appliancesDropdown = document.getElementById("appliancesDropdown");
  const appliancesSet = new Set();

  recipes.forEach((recipe) => {
    appliancesSet.add(recipe.appliance);
  });

  appliancesDropdown.innerHTML = `<form class="search-bar" method="get">
        <input
          class="text-search"
          type="text"
          name="query"
          placeholder="Rechercher une recette, un ingrédient, ..."
        />
        <button class="search-button" type="submit">Recherche</button>
      </form>`;

  appliancesSet.forEach((appliance) => {
    const option = document.createElement("option");
    option.value = appliance;
    option.textContent = appliance;
    appliancesDropdown.appendChild(option);
  });
}

setTimeout(() => {
  fillAppliancesDropdown(recipes);
}, 100);

// Ustensils dropdown
function fillUstensilsDropdown(recipes) {
  const ustensilsDropdown = document.getElementById("ustensilsDropdown");
  const ustensilsSet = new Set();

  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ustensils)) {
      recipe.ustensils.forEach((ustensil) => {
        ustensilsSet.add(ustensil);
      });
    } else if (recipe.ustensils) {
      ustensilsSet.add(recipe.ustensils);
    }
  });
  ustensilsDropdown.innerHTML = `<form class="search-bar" method="get">
        <input
          class="text-search"
          type="text"
          name="query"
          placeholder="Rechercher une recette, un ingrédient, ..."
        />
        <button class="search-button" type="submit">Recherche</button>
      </form>`;

  ustensilsSet.forEach((ustensils) => {
    const option = document.createElement("option");
    option.value = ustensils;
    option.textContent = ustensils;
    ustensilsDropdown.appendChild(option);
  });
}

setTimeout(() => {
  fillUstensilsDropdown(recipes);
}, 100);

// Ingredients dropdown
function fillIngredientsDropdown(recipes) {
  const ingredientsDropdown = document.getElementById("ingredientsDropdown");
  const ingredientsSet = new Set();

  recipes.forEach((recipe) => {
    if (Array.isArray(recipe.ingredients)) {
      recipe.ingredients.forEach((ingredients) => {
        ingredientsSet.add(ingredients.ingredient);
      });
    } else if (recipe.ingredients) {
      ingredientsSet.add(recipe.ingredients);
    }
  });

  ingredientsDropdown.innerHTML = `<form class="search-bar" method="get">
        <input
          class="text-search"
          type="text"
          name="query"
          placeholder="Rechercher une recette, un ingrédient, ..."
        />
        <button class="search-button" type="submit">Recherche</button>
      </form>`;

  ingredientsSet.forEach((ingredients) => {
    const option = document.createElement("option");
    option.value = ingredients;
    option.textContent = ingredients;
    ingredientsDropdown.appendChild(option);
  });
}

setTimeout(() => {
  fillIngredientsDropdown(recipes);
}, 100);
