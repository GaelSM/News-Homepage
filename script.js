const menuIcon = document
  .querySelector(".menu__icon")
  .addEventListener("click", openMenu);

const menuLineOne = document.querySelector(".menu__icon__line1");
const menuLineTwo = document.querySelector(".menu__icon__line2");
const menuLineThree = document.querySelector(".menu__icon__line3");

const menuContainer = document.querySelector(".menu__container");
const html = document.getElementsByTagName("html")[0];

function openMenu() {
  menuLineOne.classList.toggle("rotate__one");
  menuLineTwo.classList.toggle("move__two");
  menuLineThree.classList.toggle("rotate__three");

  menuContainer.classList.toggle("active");
  html.classList.toggle("disable__scroll");
}
