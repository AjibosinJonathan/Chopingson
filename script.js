const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
  hamburger.classList.toggle("is-active");
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

  hamburger.setAttribute("aria-expanded", !isExpanded);

  document.body.style.overflow = isExpanded ? "" : "hidden";

});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
    navLinksContainer.classList.remove("active");
    hamburger.classList.remove("is-active");

    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

document.addEventListener("keydown", (event) => {
  const isMenuOpen = hamburger.classList.contains("is-active");
  if (isMenuOpen && event.key === "Escape") {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  const isMenuOpen = hamburger.classList.contains("is-active");
  if (isMenuOpen && !hamburger.contains(event.target) && !navLinksContainer.contains(event.target)) {
    closeMenu();
  }
});



