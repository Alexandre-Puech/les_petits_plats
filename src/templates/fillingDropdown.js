// Appliances dropdown
function fillAppliancesDropdown() {
  const appliancesDropdown = document.getElementById("appliancesDropdown");
  const appliancesSet = new Set();

  document
    .querySelectorAll(".recipe-card .hidden-appliance")
    .forEach((appliance) => {
      appliancesSet.add(appliance.textContent.trim());
    });

  appliancesDropdown.innerHTML = `<form class="search-bar" method="get">
        <input
          class="text-search"
          type="text"
          name="query"
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

// Ustensils dropdown
function fillUstensilsDropdown() {
  const ustensilsDropdown = document.getElementById("ustensilsDropdown");
  const ustensilsSet = new Set();

  document
    .querySelectorAll(".recipe-card .hidden-ustensils")
    .forEach((ustensils) => {
      ustensils.textContent.split(",").forEach((ustensil) => {
        ustensilsSet.add(ustensil.trim());
      });
    });

  ustensilsDropdown.innerHTML = `<form class="search-bar" method="get">
        <input
          class="text-search"
          type="text"
          name="query"
        />
        <button class="search-button" type="submit">Recherche</button>
      </form>`;

  ustensilsSet.forEach((ustensil) => {
    const option = document.createElement("option");
    option.value = ustensil;
    option.textContent = ustensil;
    ustensilsDropdown.appendChild(option);
  });
}

// Ingredients dropdown
function fillIngredientsDropdown() {
  const ingredientsDropdown = document.getElementById("ingredientsDropdown");
  const ingredientsSet = new Set();

  document
    .querySelectorAll(".recipe-card .card-ingredients .ingredient-name")
    .forEach((ingredients) => {
      ingredientsSet.add(ingredients.textContent.trim());
    });

  ingredientsDropdown.innerHTML = `<form class="search-bar" method="get">
        <input
          class="text-search"
          type="text"
          name="query"
        />
        <button class="search-button" type="submit">Recherche</button>
      </form>`;

  ingredientsSet.forEach((ingredient) => {
    const option = document.createElement("option");
    option.value = ingredient;
    option.textContent = ingredient;
    ingredientsDropdown.appendChild(option);
  });
}

// Update dropdowns when the page is loaded and when recipes are updated
document.addEventListener("DOMContentLoaded", () => {
  fillAppliancesDropdown();
  fillUstensilsDropdown();
  fillIngredientsDropdown();
});

export function updateDropdowns() {
  fillAppliancesDropdown();
  fillUstensilsDropdown();
  fillIngredientsDropdown();
}
