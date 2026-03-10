const hamburger = document.getElementById("hamburger");
const navLinksContainer = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
  hamburger.classList.toggle("is-active");
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

  hamburger.setAttribute("aria-expanded", !isExpanded);

});

function closeMenu() {
    navLinksContainer.classList.remove("active");
    hamburger.classList.remove("is-active");

    hamburger.setAttribute("aria-expanded", "false");
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


const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');

// 1. Clone the first slide and add it to the end of the track
const firstClone = slides[0].cloneNode(true);
track.appendChild(firstClone);

let index = 0;
const slideWidth = 100; // 100%

function startSliding() {
  index++;
  
  // Add the smooth transition back in (we might have turned it off)
  track.style.transition = "transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)";
  track.style.transform = `translateX(-${index * slideWidth}%)`;

  // Check if we are on the clone
  if (index >= slides.length) {
    // Wait for the animation to finish before jumping
    setTimeout(() => {
      track.style.transition = "none"; // Turn off animation
      index = 0; // Reset index
      track.style.transform = `translateX(0)`; // Jump to real first slide
    }, 800); // This matches the 0.8s transition time
  }
}

setInterval(startSliding, 3000);
