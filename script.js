document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");

  console.log("DOM loaded - checking elements...");

  // Open menu
  hamburgerMenu.addEventListener("click", function () {
    console.log("Hamburger clicked - opening menu");
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close menu
  function closeMenu() {
    console.log("Closing menu");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  // Close menu via close button
  closeBtn.addEventListener("click", closeMenu);

  // Close via overlay
  overlay.addEventListener("click", closeMenu);

  // Close menu when clicking on links
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu-content a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
const cards = document.querySelector(".offer-cards");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;
let visibleCards = 3.5; // default for desktop
const gap = 25; // px gap between cards

// Function to get card width including gap
function getCardWidth() {
  const card = document.querySelector(".offer-card");
  return card.offsetWidth + gap;
}

// Function to update visibleCards based on window width
function updateVisibleCards() {
  if (window.innerWidth <= 768) {
    visibleCards = 1.5;
  } else {
    visibleCards = 3.5;
  }
}

// Function to update slider position based on index
function updateSlider() {
  const cardWidth = getCardWidth();
  cards.style.transform = `translateX(-${cardWidth * index}px)`;
}

// Initialize visibleCards on load
updateVisibleCards();

next.addEventListener("click", () => {
  const totalCards = document.querySelectorAll(".offer-card").length;
  const maxIndex = totalCards - visibleCards;

  if (index < maxIndex) {
    index++;
    updateSlider();
  }
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});

// Handle window resize - reset index and recalc visible cards
window.addEventListener("resize", () => {
  const oldVisibleCards = visibleCards;
  updateVisibleCards();
  if (visibleCards !== oldVisibleCards) {
    index = 0; // reset index so slider resets
    updateSlider();
  }
});
