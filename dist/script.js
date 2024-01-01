const hamburgerIcon = document.querySelector("#menuToggler");
const navMenuIcon = document.querySelector("#menuBar");

hamburgerIcon.addEventListener("click", () => {
  // alert('hello')
  hamburgerIcon.classList.toggle("active");
  navMenuIcon.classList.toggle("active");
});

document.querySelectorAll(".navList").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerIcon.classList.remove("active");
    navMenuIcon.classList.remove("active");
  })
);
