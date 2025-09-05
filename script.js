// Hamburger dropdown menu

const hamburger = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdownMenu");

hamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});

// Membership signup button
const signupBtn = document.getElementById("signupBtn");
