const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

/*const screenWidth = window.matchMedia("(min-width: 769px)");

screenWidth.addEventListener("change", () => {
  navMenu.classList.remove("show");
});*/

function openMenu() {
  navMenu.classList.add("show");
  overlay.classList.add("show");
}

function closeMenu() {
  navMenu.classList.remove("show");
  overlay.classList.remove("show");
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
