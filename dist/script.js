// Mobile nav
const nav__links = document.querySelector(".navLinks");
function onToggleMenu(e) {
  // console.log(e.name);
  e.name = e.name === "menu" ? "close" : "menu";
  nav__links.classList.toggle("top-[4%]");
}

const accordionListNodes = document.querySelectorAll("#accordion > *");
const accordionListLength = accordionListNodes.length;
let currentSelectionIndex = 0;
const ANIMATION_DUARATION = 5;

const accordionListNode = accordionListNodes[currentSelectionIndex];
accordionListNode.classList.add("accordion__list--active");
const progess = accordionListNode.querySelector(
  ".accordion__progress-indication"
);
progess.style.transition = `transform ${ANIMATION_DUARATION}s`;

function animationEffect() {
  if (accordionListLength - 1 === currentSelectionIndex) {
    currentSelectionIndex = 0;
  } else {
    currentSelectionIndex++;
  }
  console.log(currentSelectionIndex);
  const accordionListNode = accordionListNodes[currentSelectionIndex];
  const progess = accordionListNode.querySelector(
    ".accordion__progress-indication"
  );
  progess.style.transition = `transform ${ANIMATION_DUARATION}s`;

  const prevAccordionListNode =
    accordionListNodes[
      currentSelectionIndex === 0
        ? accordionListLength - 1
        : currentSelectionIndex - 1
    ];
  // console.log(accordionListNode);
  accordionListNode.classList.add("accordion__list--active");
  prevAccordionListNode.classList.remove("accordion__list--active");

  // PROGRESS BAR

  // progess.style.transition = 'transform 5s'

  // transition: transform 5s
}
setInterval(animationEffect, ANIMATION_DUARATION * 1000);
