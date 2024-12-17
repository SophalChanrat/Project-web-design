let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll("[id^='slide_']");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "flex" : "none"; // Ensure slides use flex for layout
  });

  dots.forEach((dot, index) => {
    dot.className = index === slideIndex ? "dot active" : "dot";
  });
}

function nextSlide() {
  const slides = document.querySelectorAll("[id^='slide_']");
  slideIndex = (slideIndex + 1) % slides.length;
  showSlides();
}

function prevSlide() {
  const slides = document.querySelectorAll("[id^='slide_']");
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlides();
}

function currentSlide(index) {
  slideIndex = index - 1;
  showSlides();
}

function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();
  setTimeout(autoSlide, 3000);
});
