// const menuToggler = document.getElementById("menuToggler");
// const mobileMneu = document.getElementById("mobileMenu");
// const menuTogglerClose = document.getElementById("menuTogglerClose");
// console.log(menuToggler);

// menuToggler.addEventListener("click", (e) => {
//   menuToggler.classList.add("hidden");
//   menuTogglerClose.classList.remove("hidden");
// });

// menuTogglerClose.addEventListener("click", () => {
//   menuTogglerClose.classList.add("hidden");
//   menuToggler.classList.remove("hidden");
//   menuTogglerClose.classList.add("");
// });

const nav__links = document.querySelector(".navLinks");
function onToggleMenu(e) {
  // console.log(e.name);
  e.name = e.name === "menu" ? "close" : "menu";
  nav__links.classList.toggle("top-[4%]");
}
