import { recipes } from "../data/recipe.js";
import { normalizeString } from "../utils/string.js";
import { filterRecipes } from "../algo/algo-for-loop.js";
import { displayCards } from "./recipe-card.js";
import { updateDropdowns } from "./fillingDropdown.js";
import { updateRecipesCount } from "./recipesCount.js";
import {
  filteredRecipes,
  updateFilteredRecipes,
} from "../shared/filteredRecipes.js";

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const searchInput = dropdown.querySelector(".dropdown-search");
    const dropdownList = dropdown.querySelector(".dropdown-list");
    const dropdownCloseButton = dropdown.querySelector(
      ".dropdown-close-button"
    );
    const tagContainer = dropdown.querySelector(".tag-container");
    const allItems = Array.from(dropdownList.children);

    searchInput.addEventListener("input", (event) => {
      const userSearch = event.target.value;
      const normalizedUserSearch = normalizeString(userSearch);

      if (normalizedUserSearch.length >= 3) {
        dropdownCloseButton.style.display = "block";
        const filteredItems = allItems.filter((item) =>
          item.textContent.toLowerCase().includes(normalizedUserSearch)
        );

        dropdownList.innerHTML = "";
        if (filteredItems.length === 0) {
          dropdownList.innerHTML = `<p class="no-recipe">Aucune recette ne contient "${userSearch}"</p>`;
        } else {
          filteredItems.forEach((item) => dropdownList.appendChild(item));
        }
      } else {
        dropdownCloseButton.style.display = "none";
        dropdownList.innerHTML = "";
        allItems.forEach((item) => dropdownList.appendChild(item));
      }
    });

    dropdownCloseButton.addEventListener("click", (event) => {
      event.preventDefault();
      searchInput.value = "";
      dropdownCloseButton.style.display = "none";
      dropdownList.innerHTML = "";
      allItems.forEach((item) => dropdownList.appendChild(item));

      // Réinitialisation du filtrage à l'état actuel de filteredRecipes
      displayCards(filteredRecipes);
      updateRecipesCount();
      updateDropdowns();
    });

    dropdownList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        const selectedOption = event.target.textContent;
        const normalizedSelectedOption = normalizeString(selectedOption);
        searchInput.value = normalizedSelectedOption;
        dropdownCloseButton.style.display = "block";

        // Création du tag visuel
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.textContent = selectedOption;
        const removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.className = "remove-tag";
        tag.appendChild(removeButton);
        tagContainer.appendChild(tag);
        tagContainer.style.display = "flex";

        dropdown.querySelector(".dropdown-content").classList.remove("show");

        // Mise à jour du filtrage
        updateFilteredRecipes(
          filterRecipes(normalizedSelectedOption, filteredRecipes)
        );
        displayCards(filteredRecipes);
        updateDropdowns();
        updateRecipesCount();

        removeButton.addEventListener("click", () => {
          tag.remove();
          tagContainer.style.display = "none";

          // Mise à jour du filtrage après suppression du tag
          updateFilteredRecipes(recipes);
          displayCards(recipes);
          updateDropdowns();
          updateRecipesCount();
        });
      }
    });
  });
});
