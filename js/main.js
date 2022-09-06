const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollaps = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

//MODAL
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("myModal").style.display = "block";
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

//MODAL