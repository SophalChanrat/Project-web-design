let numberElement = document.getElementById("number");
let numberElement1 = document.getElementById("number1");
let numberElement2 = document.getElementById("number2");
let numberElement3 = document.getElementById("number3");
let currentNumber = 0;
let targetNumber = 30;
function animateNumber() {
  if (currentNumber <= targetNumber) {
    numberElement.textContent = currentNumber + "K+";
    currentNumber++;
    setTimeout(animateNumber, 100);
  }
}
let currentNumber1 = 0.1;
let targetNumber1 = 1;
function animateNumber1() {
  if (currentNumber1 < targetNumber1) {
    numberElement1.textContent = currentNumber1.toFixed(1) + "M";
    currentNumber1 += 0.1;
    setTimeout(animateNumber1, 100);
  } else {
    numberElement1.textContent = targetNumber1 + "M";
  }
}
let currentNumber2 = 0;
let targetNumber2 = 150;
function animateNumber2() {
  if (currentNumber2 <= targetNumber2) {
    numberElement2.textContent = currentNumber2;
    currentNumber2++;
    setTimeout(animateNumber2, 20);
  }
}
let currentNumber3 = 1.0;
let targetNumber3 = 3.5;
function animateNumber3() {
  if (currentNumber3 <= targetNumber3) {
    numberElement3.innerHTML = currentNumber3.toFixed(1) + "<span>HOURS</span>";
    currentNumber3 += 0.1;
    setTimeout(animateNumber3, 100);
  } else {
    numberElement3.innerHTML = targetNumber3 + " <span>HOURS</span>"; // Finalize display
  }
}
animateNumber();
animateNumber1();
animateNumber2();
animateNumber3();

const slides = document.querySelectorAll(".slide");
const slidescount = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideWidth = 300;

let currentSlide = 0;

function updateSlide(index) {
  const offset = -index * slideWidth; // Calculate offset based on slide width
  document.querySelector('.slide').style.transform = `translateX(${offset}px)`; // Move slides smoothly
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slidescount;
    updateSlide(currentSlide);
}

// Move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slidescount) % slidescount;
    updateSlide(currentSlide);
}
let autoSlideInterval = setInterval(nextSlide, 5000);

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; // Loop to the start
  updateSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the end
  updateSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateSlide(currentSlide);
  });
});

updateSlide(currentSlide);
document.addEventListener("DOMContentLoaded", () => {
  const detailItems = document.querySelectorAll(".detail .item");
  const dots = document.querySelectorAll(".dots .dott");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentSlide = 0;
  const totalSlides = detailItems.length;

  // Function to update the active slide
  function updateSlide(index) {
    // Remove "active" class from all slides and dots
    detailItems.forEach((item) => item.classList.remove("active"));
    dots.forEach((dott) => dott.classList.remove("active"));
    // Add "active" class to the current slide and dot
    detailItems[index].classList.add("active");
    dots[index].classList.add("active");
  }

  // Event listeners for arrows
  prevBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide(currentSlide);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide(currentSlide);
    }
  });
  let autoChangeInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop to the start after the last slide
    updateSlide(currentSlide);
  }, 5000); // Change every 5 seconds
  
  // Pause auto-slide on manual interaction and restart
  function resetAutoSlide() {
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide(currentSlide);
    }, 5000);
  }
  
  // Attach reset logic to navigation buttons and dots
  prevBtn.addEventListener("click", resetAutoSlide);
  nextBtn.addEventListener("click", resetAutoSlide);
  dots.forEach((dott) => dott.addEventListener("click", resetAutoSlide));
  

  // Event listeners for dots
  dots.forEach((dott, index) => {
    dott.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        currentSlide = index;
        updateSlide(currentSlide);
        autoSlideInterval();
      }
    });
  });

  // Ensure functionality is disabled for larger screens
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      // Reset to the first slide and remove "active" class
      currentSlide = 0;
      updateSlide(currentSlide);
      clearInterval(autoChangeInterval);
    }
  });

  // Initialize the first slide
  updateSlide(currentSlide);
});
function toggleMenu() {
  // Get elements
  const overlay = document.getElementById("menuOverlay");
  const menuIconBars = document.getElementById("menuIcon").children[0]; // Bars icon
  const menuIconClose = document.getElementById("menuIcon").children[1]; // Close icon
  const navigationCon = document.querySelector(".navigation-con");

  // Toggle the overlay's visibility
  overlay.classList.toggle("active");

  // Change the icon between bars and close (x)
  if (overlay.classList.contains("active")) {
      menuIconBars.style.display = "none"; // Hide bars
      menuIconClose.style.display = "block"; // Show close icon
      navigationCon.style.backgroundColor = "pink"; // Change navigation background to pink
  } else {
      menuIconBars.style.display = "block"; // Show bars
      menuIconClose.style.display = "none"; // Hide close icon
      navigationCon.style.backgroundColor = "white"; // Reset navigation background to white
  }
}
// JavaScript to toggle the dropdown visibility, arrow rotation, and ensure only one list is open at a time
const titles = document.querySelectorAll('.title-footer');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const parentItem = title.parentElement;
    const list = parentItem.querySelector('.list');

    // If the list is already open, close it
    if (list.style.display === 'block') {
      list.style.display = 'none';
      title.classList.remove('open');
    } else {
      // Close all lists and remove the "open" class from all titles
      document.querySelectorAll('.list').forEach(otherList => {
        otherList.style.display = 'none';
      });
      document.querySelectorAll('.title-footer').forEach(otherTitle => {
        otherTitle.classList.remove('open');
      });

      // Open the clicked list and rotate the arrow
      list.style.display = 'block';
      title.classList.add('open');
    }
  });
});


