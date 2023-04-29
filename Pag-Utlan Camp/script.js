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
<<<<<<< HEAD


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

window.addEventListener('load', function() {
  document.querySelector('.loading').style.display = 'none';
});
// script for devs scroll buttons
const sliderWrapper1 = document.querySelector('.slider-wrapper1');
const slider1 = document.querySelector('.slider1');
const nextBtn1 = document.querySelector('.next1');
const prevBtn1 = document.querySelector('.prev1');
const scrollStep1 = 450;

nextBtn1.addEventListener('click', function() {
  sliderWrapper1.scrollTo({
    left: sliderWrapper1.scrollLeft + scrollStep,
    behavior: 'smooth'
  });
});

prevBtn1.addEventListener('click', function() {
  sliderWrapper1.scrollTo({
    left: sliderWrapper1.scrollLeft - scrollStep,
    behavior: 'smooth'
  });
});

nextBtn1.addEventListener('mousedown', function(e) {
  e.preventDefault();
  sliderWrapper1.scrollTo({
    left: sliderWrapper.scrollLeft + scrollStep,
    behavior: 'smooth'
  });
});

prevBtn1.addEventListener('mousedown', function(e) {
  e.preventDefault();
  sliderWrapper1.scrollTo({
    left: sliderWrapper1.scrollLeft - scrollStep,
    behavior: 'smooth'
  });
});

//FOR FORMS
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = form.querySelector("#name").value;
//   const email = form.querySelector("#email").value;
//   const message = form.querySelector("#message").value;
//   const url =
//     "https://docs.google.com/forms/d/1kAu_KcQse8DVpU1IZtFcshYqdh73KqDMiAMak30ApGY/prefill";
//   const data = new FormData();
//   data.append("entry.1234567890", name);
//   data.append("entry.0987654321", email);
//   data.append("entry.2468013579", message);
//   fetch(url, {
//     method: "POST",
//     mode: "no-cors",
//     body: data,
//   })
//     .then(() => {
//       alert("Thank you for your message!");
//       form.reset();
//     })
//     .catch((error) => {
//       alert("Oops, something went wrong. Please try again later.");
//       console.error(error);
//     });
// });
=======


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

window.addEventListener('load', function() {
  document.querySelector('.loading').style.display = 'none';
});
>>>>>>> parent of 3180e8a (added new assets)
