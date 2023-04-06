// script for more photos scroll buttons
const sliderWrapper = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const scrollStep = 450;

nextBtn.addEventListener('click', function() {
  sliderWrapper.scrollTo({
    left: sliderWrapper.scrollLeft + scrollStep,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', function() {
  sliderWrapper.scrollTo({
    left: sliderWrapper.scrollLeft - scrollStep,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('mousedown', function(e) {
  e.preventDefault();
  sliderWrapper.scrollTo({
    left: sliderWrapper.scrollLeft + scrollStep,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('mousedown', function(e) {
  e.preventDefault();
  sliderWrapper.scrollTo({
    left: sliderWrapper.scrollLeft - scrollStep,
    behavior: 'smooth'
  });
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li a");

// Toggle the "open" class on the navLinks element when the hamburger menu is clicked
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
});

// Remove the "open" class from the navLinks element when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("toggle");
  });
});
