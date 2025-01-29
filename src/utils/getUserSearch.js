export const mainSearchBar = document.getElementById("mainSearchBar");
export let userSearch = "";

export function getUserSearch() {
  mainSearchBar.addEventListener("input", (event) => {
    if (event.target.value.length >= 3) {
      event.preventDefault();
      userSearch = event.target.value;
    }
  });
  return userSearch;
}
