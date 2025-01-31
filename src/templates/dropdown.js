document.addEventListener("DOMContentLoaded", () => {
  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  const searchBars = document.querySelectorAll(".dropdown-search");

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

    if (
      !event.target.matches(".dropdown-button") &&
      !isClickInsideSearchBar &&
      !event.target.closest("li")
    ) {
      document.querySelectorAll(".dropdown-content").forEach((content) => {
        content.classList.remove("show");
      });
    }
  });

  const searchButtons = document.querySelectorAll(".dropdown-search-button");
  searchButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });

  const closeButtons = document.querySelectorAll(".dropdown-close-button");
  closeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const searchInput = button.previousElementSibling;
      searchInput.value = "";
      button.style.display = "none";
      const dropdownList = button
        .closest(".dropdown-content")
        .querySelector(".dropdown-list");
      const allItems = Array.from(dropdownList.children);
      dropdownList.innerHTML = "";
      allItems.forEach((item) => {
        dropdownList.appendChild(item);
      });
    });
  });
});
