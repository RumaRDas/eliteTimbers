const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollaps = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

$('.carousel').carousel({
  interval: 3000,
  pause: false
})
