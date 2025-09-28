// Hamburger dropdown menu (robust to any page)
const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.menu-container .dropdown');

if (hamburger && dropdownMenu) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('show');
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const clickedInsideMenu = dropdownMenu.contains(e.target) || hamburger.contains(e.target);
    if (!clickedInsideMenu) {
      dropdownMenu.classList.remove('show');
    }
  });
}

// Membership signup button
const signupBtn = document.getElementById("signupBtn");
