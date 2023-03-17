const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
  overlay.classList.add("show");
  mobileNav.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
  mobileNav.classList.remove("show");
});
