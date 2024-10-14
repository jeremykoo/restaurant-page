const about = document.createElement("div");
about.classList.add("about");

const title = document.createElement("h1");
title.textContent = "About";
about.appendChild(title);

const container = document.createElement("div");
container.classList.add("container");
const p1 = document.createElement("p");
p1.textContent = "At Roasted & Toasted, coffee is more than just a drink—it’s a passion. Our journey began with a simple goal: to bring people together over expertly crafted, high-quality coffee. From the very beginning, we’ve been committed to sourcing the finest beans from sustainable farms around the world, ensuring every cup is a reflection of the care and expertise behind it.";
const p2 = document.createElement("p");
p2.textContent = "Our baristas are dedicated to the art of brewing, roasting each batch to perfection to highlight the unique flavors of every bean. Whether you're a casual coffee lover or a connoisseur, we create an experience designed to captivate your senses. At Roasted & Toasted, we provide a warm, inviting space where you can relax, connect with friends, and savor the perfect cup of coffee.";
const p3 = document.createElement("p");
p3.textContent = "At Roasted & Toasted, every cup tells a story—one of craftsmanship, community, and a deep love for coffee.";

container.appendChild(p1);
container.appendChild(p2);
container.appendChild(p3);

about.appendChild(container);

export { about }