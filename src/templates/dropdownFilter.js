import { normalizeString } from "../utils/string.js";
import { filterRecipes } from "../algo/algo-for-loop.js";
import { displayCards } from "./recipe-card.js";
import { updateDropdowns } from "./fillingDropdown.js";
import { updateRecipesCount } from "./recipesCount.js";
import {
  filteredRecipes,
  updateFilteredRecipes,
} from "../shared/filteredRecipes.js";
import { recipes } from "../data/recipe.js";

document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const searchInput = dropdown.querySelector(".dropdown-search");
    const dropdownList = dropdown.querySelector(".dropdown-list");
    const dropdownCloseButton = dropdown.querySelector(
      ".dropdown-close-button"
    );
    const tagContainer = document.getElementById("tag-container");
    const allItems = Array.from(dropdownList.children);
    const searchButton = dropdown.querySelector(".dropdown-search-button");

    searchInput.addEventListener("input", (event) => {
      const userSearch = event.target.value;
      const normalizedUserSearch = normalizeString(userSearch);

      if (normalizedUserSearch.length >= 3) {
        dropdownCloseButton.style.display = "block";
        const filteredItems = allItems.filter((item) =>
          normalizeString(item.textContent).includes(normalizedUserSearch)
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

    searchButton.addEventListener("click", (event) => {
      event.preventDefault();
      const userSearch = searchInput.value;
      const normalizedUserSearch = normalizeString(userSearch);
      const filteredItems = allItems.filter((item) =>
        normalizeString(item.textContent).includes(normalizedUserSearch)
      );
      dropdownList.innerHTML = "";
      if (filteredItems.length === 0) {
        dropdownList.innerHTML = `<p class="no-recipe">Aucune recette ne contient "${userSearch}"</p>`;
      } else {
        filteredItems.forEach((item) => dropdownList.appendChild(item));
      }
    });

    dropdownCloseButton.addEventListener("click", (event) => {
      event.preventDefault();
      searchInput.value = "";
      dropdownCloseButton.style.display = "none";
      dropdownList.innerHTML = "";
      allItems.forEach((item) => dropdownList.appendChild(item));
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

        const tag = document.createElement("div");
        tag.className = "tag";
        tag.textContent = selectedOption;
        const removeButton = document.createElement("button");
        removeButton.textContent = "";
        removeButton.className = "remove-tag";
        tag.appendChild(removeButton);
        tagContainer.appendChild(tag);
        tagContainer.style.display = "flex";

        dropdown.querySelector(".dropdown-content").classList.remove("show");
        dropdown.querySelector(".dropdown-button").classList.remove("open");

        updateFilteredRecipes(
          filterRecipes(normalizedSelectedOption, filteredRecipes)
        );
        displayCards(filteredRecipes);
        updateDropdowns();
        updateRecipesCount();
        searchInput.value = "";
        dropdownCloseButton.style.display = "none";

        removeButton.addEventListener("click", () => {
          tag.remove();
          const remainingTags = Array.from(tagContainer.children).map((tag) =>
            normalizeString(tag.textContent)
          );
          if (remainingTags.length === 0) {
            tagContainer.style.display = "none";
            updateFilteredRecipes(recipes);
            displayCards(recipes);
            updateDropdowns();
            updateRecipesCount();
          } else {
            let updatedFilteredRecipes = recipes;
            remainingTags.forEach((tag) => {
              updatedFilteredRecipes = filterRecipes(
                tag,
                updatedFilteredRecipes
              );
            });
            updateFilteredRecipes(updatedFilteredRecipes);
            displayCards(updatedFilteredRecipes);
            updateDropdowns();
            updateRecipesCount();
          }
        });
      }
    });
  });
});
