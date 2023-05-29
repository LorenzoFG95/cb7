const navItems = document.querySelectorAll(".navItem");
const contentHeaderItem = document.querySelectorAll(".contentHeaderItem");

navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

contentHeaderItem.forEach((element) => {
    element.addEventListener("click", () => {
      contentHeaderItem.forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
    });
  });