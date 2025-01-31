// Appliances dropdown
function fillAppliancesDropdown() {
  //const appliancesDropdown = document.getElementById("appliancesDropdown");
  const appliancesList = document.getElementById("appliancesList");
  const appliancesSet = new Set();

  document
    .querySelectorAll(".recipe-card .hidden-appliance")
    .forEach((appliance) => {
      appliancesSet.add(appliance.textContent.trim());
    });

  appliancesList.innerHTML = "";

  appliancesSet.forEach((appliance) => {
    const option = document.createElement("li");
    option.value = appliance;
    option.textContent = appliance;
    appliancesList.appendChild(option);
  });
}

// Ustensils dropdown
function fillUstensilsDropdown() {
  //const ustensilsDropdown = document.getElementById("ustensilsDropdown");
  const ustensilsList = document.getElementById("ustensilsList");
  const ustensilsSet = new Set();

  document
    .querySelectorAll(".recipe-card .hidden-ustensils")
    .forEach((ustensils) => {
      ustensils.textContent.split(",").forEach((ustensil) => {
        ustensilsSet.add(ustensil.trim());
      });
    });

  ustensilsList.innerHTML = "";

  ustensilsSet.forEach((ustensil) => {
    const option = document.createElement("li");
    option.value = ustensil;
    option.textContent = ustensil;
    ustensilsList.appendChild(option);
  });
}

// Ingredients dropdown
function fillIngredientsDropdown() {
  //const ingredientsDropdown = document.getElementById("ingredientsDropdown");
  const ingredientList = document.getElementById("ingredientsList");
  const ingredientsSet = new Set();

  document
    .querySelectorAll(".recipe-card .card-ingredients .ingredient-name")
    .forEach((ingredients) => {
      ingredientsSet.add(ingredients.textContent.trim());
    });

  ingredientList.innerHTML = "";

  ingredientsSet.forEach((ingredient) => {
    const option = document.createElement("li");
    option.value = ingredient;
    option.textContent = ingredient;
    ingredientList.appendChild(option);
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
