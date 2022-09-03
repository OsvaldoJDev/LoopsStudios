const menuDropDown = document.querySelector(".drop-down");
const btnIcon = document.querySelector(".btn-menu img");
const btnMobile = document.querySelector(".btn-menu");

function abrirMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  menuDropDown.classList.toggle("on");
  if (btnIcon.getAttribute("src") === "./img/icon-hamburger.svg") {
    btnIcon.src = "./img/icon-close.svg";
  } else {
    btnIcon.src = "./img/icon-hamburger.svg";
  }
  const MenuAtivo = menuDropDown.classList.contains("on");
  event.currentTarget.setAttribute("aria-expanded", MenuAtivo);
}

btnMobile.addEventListener("click", abrirMenu);
btnMobile.addEventListener("touchstart", abrirMenu);
