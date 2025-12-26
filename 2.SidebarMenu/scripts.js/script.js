const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll("nav a");

const screenWidth = window.matchMedia("(width < 768px)");

screenWidth.addEventListener("change", (e) => updateNavbar(e));

function updateNavbar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    navMenu.setAttribute("inert", "");
  } else {
    navMenu.removeAttribute("inert", "");
  }
}

function openMenu() {
  navMenu.classList.add("show");
  overlay.classList.add("show");
  menuBtn.setAttribute("aria-expanded", true);
  navMenu.removeAttribute("inert", "");
}

function closeMenu() {
  navMenu.classList.remove("show");
  overlay.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", false);
  navMenu.setAttribute("inert", "");

  updateNavbar(screenWidth);
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

updateNavbar(screenWidth);
