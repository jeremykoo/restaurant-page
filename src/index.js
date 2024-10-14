import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const nav = document.querySelector("nav");
const content = document.getElementById("content");
content.appendChild(home);

nav.addEventListener("click", (event) => {
    console.log(event.target.id);
    content.innerHTML = "";
    if (event.target.id === "home") {
        content.appendChild(home);
    }
    else if (event.target.id === "menu") {
        content.appendChild(menu);
    }
    else if (event.target.id === "about") {
        content.appendChild(about);
    }
});

const menuButton = document.querySelector(".home-menu-button");
const aboutButton = document.querySelector(".home-about-button");
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(menu);
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(about);
});
