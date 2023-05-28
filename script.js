// Select the mobile navigation button and the header element
const mobileNav = document.querySelector(".mobile-navbar-btn");
const navHeader = document.querySelector(".header");

// Function to toggle the active class on the header element
const toggleNavbar = () => {
  navHeader.classList.toggle("active");
};

// Add event listener to the mobile navigation button to toggle the navbar
mobileNav.addEventListener("click", toggleNavbar);

// Add scroll event listener to the window
window.addEventListener("scroll", scrollFunction);

// Function to handle the scroll event
function scrollFunction() {
  const scrollButton = document.getElementById("scrollButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
}

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
