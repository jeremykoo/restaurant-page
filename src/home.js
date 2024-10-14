const home = document.createElement("div");
home.classList.add("home");

const title = document.createElement("h1");
title.textContent = "Your Favorite Coffee Roasted, Our Bakery Best Toasted.";
const description = document.createElement("p");
description.textContent = "Our expertly crafted specialty coffee is roasted to perfection, bringing out the unique flavors of each bean. Our delicious baked goods like muffins and croissants are always toasted for the best experience."

const container = document.createElement("div");
const menuButton = document.createElement("button");
menuButton.textContent = "MENU";
menuButton.classList.add("home-menu-button");
const aboutButton = document.createElement("button");
aboutButton.textContent = "LEARN MORE";
aboutButton.classList.add("home-about-button");

home.appendChild(title);
home.appendChild(description);
container.appendChild(menuButton);
container.appendChild(aboutButton);
home.appendChild(container);

export { home }