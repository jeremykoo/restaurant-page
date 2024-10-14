const menu = document.createElement("div");
menu.classList.add("menu");

const title = document.createElement("h1");
title.textContent = "Menu";
menu.appendChild(title);

const container = document.createElement("div");
container.classList.add("container");

const items = [
    { 
        name: "Espresso",
        desc: "A rich and bold shot of pure coffee, perfect for a quick pick-me-up",
        price: "$3.50",
    },
    { 
        name: "Cappuccino",
        desc: "A delightful balance of espresso, steamed milk, and a thick layer of foam.",
        price: "$4.00",
    },
    { 
        name: "Latte",
        desc: "Smooth espresso with steamed milk and a light touch of foam, a creamy classic.",
        price: "$4.50",
    },
    { 
        name: "Mocha",
        desc: "A rich combination of espresso, chocolate, and steamed milk topped with whipped cream.",
        price: "$5.00",
    },
    { 
        name: "Flat White",
        desc: "Silky steamed milk poured over a smooth shot of espresso for a velvety experience.",
        price: "$4.25",
    },
    { 
        name: "Americano",
        desc: "Espresso diluted with hot water, offering a similar strength but a less intense flavor.",
        price: "$3.75",
    },
    { 
        name: "Macchiato",
        desc: 'A shot of espresso "marked" with a small amount of foamed milk.',
        price: "$3.80",
    },
    { 
        name: "Cold Brew",
        desc: "Coffee brewed cold for a smoother and less acidic flavor, served over ice.",
        price: "$4.75",
    },
];

items.forEach((coffee) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const leftPart = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = coffee.name;
    const desc = document.createElement("p");
    desc.textContent = coffee.desc;
    leftPart.appendChild(name);
    leftPart.appendChild(desc);

    const price = document.createElement("p");
    price.textContent = coffee.price;

    item.appendChild(leftPart)
    item.appendChild(price);
    container.append(item);
});

menu.append(container);

export { menu }