document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed", {
    strings: ["Web Developer", "Problem Solver", "Creative Coder"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
});



  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  let index = 0;
const wrapper = document.querySelector('.testimonial-wrapper');
const testimonials = document.querySelectorAll('.testimonial');

setInterval(() => {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  index = (index + 1) % testimonials.length;
}, 3000);


const sections = document.querySelectorAll("section, div[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});