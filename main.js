const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const mobileMenu = () => {
  navMenu.classList.toggle('show');
  // hamburger.classList.toggle("show");
  if (navMenu.classList.contains('show')) {
    hamburger.innerHTML = '<i class="fas fa-times close" ></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }

  // header.classList.toggle('bgcolor');
  // navheader.classList.toggle('margin-top');
  // wrapper.classList.toggle('bgcolor1');
};

const closeMenu = () => {
  hamburger.innerHTML = "<i class='fas fa-bars'></i>";
  navMenu.classList.remove('show');
  //  hamburger.classList.remove('show');
  // header.classList.toggle('bgcolor');
  // wrapper.classList.toggle('bgcolor1');
  // navheader.classList.toggle('margin-top');
};

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener('click', closeMenu));

hamburger.addEventListener('click', mobileMenu, false);
