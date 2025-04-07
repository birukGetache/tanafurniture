'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

function toggleLanguage() {
  document.body.classList.toggle("lang-am");
}



/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});// Function to toggle language
function toggleLanguage() {
  // Toggle visibility of English and Amharic
  const englishText = document.querySelectorAll('.en');
  const amharicText = document.querySelectorAll('.am');
  const engLabel = document.querySelector('.eng');
  const ahmLabel = document.querySelector('.ahm');

  // If Amharic is currently shown, hide it and show English
  if (englishText[0].style.display === 'none') {
    englishText.forEach(item => item.style.display = 'block');
    amharicText.forEach(item => item.style.display = 'none');
   
  }
  // If English is currently shown, hide it and show Amharic
  else {
    englishText.forEach(item => item.style.display = 'none');
    amharicText.forEach(item => item.style.display = 'block');
  }
  engLabel.classList.toggle('active');
  ahmLabel.classList.toggle('active');
}


function toggleColor() {
  const body = document.body;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Toggle between dark and light mode
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Save the current theme to local storage (optional)
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentMode);

  // Toggle icons based on mode
  sunIcon.style.display = body.classList.contains('dark-mode') ? 'none' : 'block';
  moonIcon.style.display = body.classList.contains('dark-mode') ? 'block' : 'none';
}