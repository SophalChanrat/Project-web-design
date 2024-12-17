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


