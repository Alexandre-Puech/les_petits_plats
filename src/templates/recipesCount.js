function updateRecipesCount() {
  const recipesCount = document.getElementById("recipesCount");
  const displayedRecipes = document.querySelectorAll(".recipe-card").length;
  recipesCount.textContent = `${displayedRecipes} recettes`;
}

setTimeout(updateRecipesCount, 500);
