const menuDropDown = document.querySelector(".drop-down");
const btnIcon = document.querySelector(".btn-menu img");

function abrirMenu() {
  menuDropDown.classList.toggle("on");
  if (btnIcon.getAttribute("src") === "./img/icon-hamburger.svg") {
    btnIcon.src = "./img/icon-close.svg";
  } else {
    btnIcon.src = "./img/icon-hamburger.svg";
  }
}
