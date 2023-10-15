const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    clearActiveClasses();
    event.target.classList.add("active");
  });
});

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
