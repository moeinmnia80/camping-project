const hamburgerMenuBtn = document.querySelector(".navigation__hamburger-btn");
const hamburgerMenuList = document.querySelector(".navigation__hamburger-menu");
const destinationCardLike = document.querySelectorAll(
  ".destination-card__like",
);

// open and close hamburger menu in mobile device
let isOpen = false;

hamburgerMenuBtn.addEventListener("click", () => {
  if (isOpen) {
    hamburgerMenuBtn.classList.remove("hamburger-menu--open");
    hamburgerMenuList.classList.remove("hamburger-menu-list--open");
    isOpen = false;
  } else {
    hamburgerMenuBtn.classList.add("hamburger-menu--open");
    hamburgerMenuList.classList.add("hamburger-menu-list--open");
    isOpen = true;
  }
});

// like destination card
for (let i = 0; i < 12; i++) {
  let isLike = false;

  destinationCardLike[i].addEventListener("click", () => {
    if (isLike) {
      destinationCardLike[i].classList.remove("destination-card__like--liked");
      isLike = false;
    } else {
      destinationCardLike[i].classList.add("destination-card__like--liked");
      isLike = true;
    }
  });
}
