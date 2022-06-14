const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelectorAll('.intro-card,.intro-cards');

const mobileMenu = () => {
    hamburger.classList.toggle("active");
    if(hamburger.classList.contains("active")){
        
    hamburger.innerHTML = '<i class="fas fa-times"  style="color:#fff"></i>';
}else{
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
}
    navMenu.classList.toggle("active");
    body.forEach(n=> n.classList.toggle("bgcolor"));

}

const closeMenu = () => {
    hamburger.innerHTML = "<i class='fas fa-bars'></i>";
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    body.forEach(n=> n.classList.remove("bgcolor"))
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach( n => n.addEventListener("click", closeMenu));

hamburger.addEventListener("click", mobileMenu, false);


