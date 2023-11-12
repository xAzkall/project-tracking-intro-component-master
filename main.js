/*==================== OPEN // CLOSE MENU MOBILE ====================*/
const menu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    menu.classList.add("show-menu");
    navClose.classList.remove("hidden");
    navToggle.classList.add("hidden");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    navClose.classList.add("hidden");
    navToggle.classList.remove("hidden");
  });
}
