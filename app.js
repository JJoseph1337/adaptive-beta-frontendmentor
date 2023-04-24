const menuBurger = document.querySelector('.menuIcon');
const menu = document.querySelector(".menu");
const menuProject = document.querySelector(".menuList__item_project");
const subMenuProject = document.querySelector(".subMenu-project");
const burgerIcon = document.querySelector(".burgerIcon");
const body = document.querySelector(".body");

menuBurger.onclick = () => {
    menu.classList.toggle("menu-active");

    if (menu.classList.contains("menu-active")) {
        burgerIcon.src = "./images/icon-close.svg";

    } else {
        burgerIcon.src = "./images/icon-hamburger.svg";
    }
}

menuProject.onclick = () => {
    subMenuProject.classList.toggle("subMenu-active");
}


document.onclick = (e) => {
    if (!menu.contains(e.target) && !menuBurger.contains(e.target)) {
        menu.classList.remove('menu-active');
        burgerIcon.src = "./images/icon-hamburger.svg";
    }
}
