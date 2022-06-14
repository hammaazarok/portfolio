const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelectorAll('.wrapper,.header');

const mobileMenu = () => {
  navMenu.classList.toggle('show');
  // hamburger.classList.toggle("show");
  if (navMenu.classList.contains('show')) {
    hamburger.innerHTML = '<i class="fas fa-times"  style="color:#fff"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }

  body.forEach((n) => n.classList.toggle('bgcolor'));
};

const closeMenu = () => {
  hamburger.innerHTML = "<i class='fas fa-bars'></i>";
  navMenu.classList.remove('show');
  hamburger.classList.remove('show');
  body.forEach((n) => n.classList.remove('bgcolor'));
};

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener('click', closeMenu));

hamburger.addEventListener('click', mobileMenu, false);
