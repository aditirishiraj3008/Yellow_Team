// loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader_container');  
  const content = document.querySelector('.home');  

  // Hide loader and show content after 2 seconds
  setTimeout(() => {
      loader.style.display = 'none';  
      content.style.display = 'block';  
  }, 2000);  
});


// Navbar Toggle
const navbarToggle = document.querySelector(".menu-toggle");
const navbarMenu = document.querySelector(".nav_links");
const navbarIcon = navbarToggle.querySelector("i");

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

    // Toggle icon
    if (navbarMenu.classList.contains("active")) {
        navbarIcon.classList.remove("fa-bars");
        navbarIcon.classList.add("fa-times");
    } else {
        navbarIcon.classList.remove("fa-times");
        navbarIcon.classList.add("fa-bars");
    }
});

//HP slideshow
let slideIndex = 1;
showSlides(slideIndex);
function plusSlide(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function prevSlide() {
  plusSlide(-1);
}
function nextSlide() {
  plusSlide(1);
}
