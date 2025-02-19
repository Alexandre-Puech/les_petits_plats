document.addEventListener("DOMContentLoaded", () => {
  const searchInputs = document.querySelectorAll(
    ".dropdown-search, #userSearch"
  );
  searchInputs.forEach((input) => (input.value = ""));
});
