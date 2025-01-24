document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const searchBars = document.querySelectorAll(".search-bar");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dropdownContent = button.nextElementSibling;
      dropdownContent.classList.toggle("show");
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        if (content !== dropdownContent) {
          content.classList.remove("show");
        }
      });
    });
  });

  window.addEventListener("click", (event) => {
    let isClickInsideSearchBar = false;
    searchBars.forEach((searchBar) => {
      if (searchBar.contains(event.target)) {
        isClickInsideSearchBar = true;
      }
    });

    if (!event.target.matches(".dropdown-button") && !isClickInsideSearchBar) {
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.remove("show");
      });
    }
  });

  const searchButtons = document.querySelectorAll(".search-button");
  searchButtons.forEach((button) => {
    button.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
});
