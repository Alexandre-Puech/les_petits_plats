import { normalizeString } from "./../utils/string.js";

export function filterRecipes(userSearch, recipes) {
  if (userSearch.length < 3) {
    return [];
  }

  const normalizedUserSearch = normalizeString(userSearch);

  const matchingNameArray = recipes.filter((recipe) => {
    const normalizedName = normalizeString(recipe.name || "");
    return normalizedName.includes(normalizedUserSearch);
  });

  const matchingIngredientsArray = recipes.filter((recipe) => {
    const matchingRecipesIngredients = recipe.ingredients.filter(
      (ingredient) => {
        const normalizedIngredient = normalizeString(
          ingredient.ingredient || ""
        );
        return normalizedIngredient.includes(normalizedUserSearch);
      }
    );
    return matchingRecipesIngredients.length > 0;
  });

  const matchingDescriptionArray = recipes.filter((recipe) => {
    const normalizedDescription = normalizeString(recipe.description || "");
    return normalizedDescription.includes(normalizedUserSearch);
  });

  const matchingApplianceArray = recipes.filter((recipe) => {
    const normalizedAppliance = normalizeString(recipe.appliance || "");
    return normalizedAppliance.includes(normalizedUserSearch);
  });

  const matchingUstensilsArray = recipes.filter((recipe) => {
    const matchingRecipesUstensils = recipe.ustensils.filter((ustensil) => {
      const normalizedUstensil = normalizeString(ustensil || "");
      return normalizedUstensil.includes(normalizedUserSearch);
    });
    return matchingRecipesUstensils.length > 0;
  });

  const filteredRecipes = new Set([
    ...matchingNameArray,
    ...matchingIngredientsArray,
    ...matchingDescriptionArray,
    ...matchingApplianceArray,
    ...matchingUstensilsArray,
  ]);

  return Array.from(filteredRecipes);
}
