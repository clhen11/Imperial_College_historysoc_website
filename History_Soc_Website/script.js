console.log("JS file loaded ✅");

const hamburger = document.getElementById("hamburger");
const dropdownMenu = document.getElementById("dropdownMenu");

hamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// Optional: Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});