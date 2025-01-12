import lunchImg from "./assets/menu/bowl-white.png";
import saladsImg from "./assets/menu/cabbage-white.png";
import breakfastImg from "./assets/menu/coffee-white.png";
import pastryImg from "./assets/menu/croissant-white.png";
import drinksImg from "./assets/menu/drinks-white.png";
import "./menuPage.css";

export function createMenuPage(doc) {
  const mainContainer = doc.createElement("div");

  const textSection = createTextSection(doc);
  const menuBox = createMenuBox(doc);

  mainContainer.classList.add("menu-container");

  mainContainer.appendChild(textSection);
  mainContainer.appendChild(menuBox);
  return mainContainer;
}

function createTextSection(doc) {
  const textContainer = doc.createElement("div");
  const title = doc.createElement("h2");
  const desc = doc.createElement("p");

  title.textContent = "Our Menu";
  desc.textContent = "We offer you the healthiest and tastiest food.";

  textContainer.classList.add("text-container");

  textContainer.appendChild(title);
  textContainer.appendChild(desc);
  return textContainer;
}

function createMenuBox(doc) {
  const menuBox = doc.createElement("div");
  const { menuCategories, menu } = getDataObjects();

  const categorySection = createCategorySection(doc, menuCategories);
  const menuSection = createMenuSection(doc, menu, menuCategories);

  menuBox.classList.add("menu-box");

  menuBox.appendChild(categorySection);
  menuBox.appendChild(menuSection);
  return menuBox;
}

function createCategorySection(doc, menuCategories) {
  const categorySection = doc.createElement("div");

  for (let category of menuCategories) {
    const itemContainer = doc.createElement("div");
    const name = doc.createElement("p");
    const img = doc.createElement("img");
    name.textContent = category.name;
    img.setAttribute("src", category.img);
    img.setAttribute("alt", category.alt);

    itemContainer.appendChild(img);
    itemContainer.appendChild(name);

    categorySection.appendChild(itemContainer);
  }

  categorySection.classList.add("category-section");
  return categorySection;
}

function createMenuSection(doc, menu, menuCategories) {
  const menuContent = doc.createElement("div");
  const title = doc.createElement("h3");
  const colsContainer = doc.createElement("div");
  const menuColRight = doc.createElement("div");
  const menuColLeft = doc.createElement("div");

  title.textContent = menuCategories[2].name;
  let counter = 0;

  for (const item of menu) {
    const itemContainer = doc.createElement("div");
    const itemTitle = doc.createElement("h5");
    const desc = doc.createElement("p");
    const price = doc.createElement("p");
    itemTitle.textContent = item.name;
    desc.textContent = item.desc;
    price.textContent = item.price;

    itemContainer.classList.add("menu-item");
    desc.classList.add("menu-item-content");
    price.classList.add("menu-item-price");

    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(desc);
    itemContainer.appendChild(price);

    if (counter < Math.round(menu.length / 2)) {
      menuColLeft.appendChild(itemContainer);
    } else {
      menuColRight.appendChild(itemContainer);
    }

    counter++;
  }

  menuContent.classList.add("menu-content");
  colsContainer.classList.add("cols-container");
  menuColLeft.classList.add("menu-col");
  menuColRight.classList.add("menu-col");

  colsContainer.appendChild(menuColLeft);
  colsContainer.appendChild(menuColRight);

  menuContent.appendChild(title);
  menuContent.appendChild(colsContainer);
  return menuContent;
}

function getDataObjects() {
  const menuCategories = [
    {
      name: "Lunch",
      img: lunchImg,
      alt: "Bowl icon.",
    },
    {
      name: "Salads",
      img: saladsImg,
      alt: "Cabbage icon.",
    },
    {
      name: "Breakfast",
      img: breakfastImg,
      alt: "Coffee icon.",
    },
    {
      name: "Pastry",
      img: pastryImg,
      alt: "Croissant icon.",
    },
    {
      name: "Drinks",
      img: drinksImg,
      alt: "Takeout drink icon.",
    },
  ];
  const menu = [
    {
      name: "Avocado Toast",
      desc: "Freshly mashed avocado on multigrain toast, topped with cherry tomatoes, radishes, and a drizzle of olive oil.",
      price: 8.49,
    },
    {
      name: "Greek Yogurt Parfait",
      desc: "Creamy Greek yogurt layered with homemade granola, fresh seasonal fruits, and a drizzle of honey.",
      price: 6.49,
    },
    {
      name: "Veggie Omelette",
      desc: "A protein-packed three-egg omelette filled with spinach, mushrooms, bell peppers, and feta cheese, served with a side of mixed greens.",
      price: 9.99,
    },
    {
      name: "Chia Seed Pudding",
      desc: "A creamy chia seed pudding made with almond milk, topped with fresh berries and a sprinkle of coconut flakes.",
      price: 5.99,
    },
    {
      name: "Quinoa Breakfast Bowl",
      desc: "Warm quinoa mixed with almond butter, sliced bananas, chia seeds, and a drizzle of maple syrup.",
      price: 7.99,
    },
    {
      name: "Smoked Salmon Bagel",
      desc: "A whole-grain bagel with cream cheese, smoked salmon, capers, and thinly sliced cucumber.",
      price: 12.99,
    },
    {
      name: "Power Smoothie Bowl",
      desc: "A vibrant smoothie bowl made with acai, spinach, and banana, topped with granola, kiwi, and chia seeds.",
      price: 8.99,
    },
  ];

  return { menuCategories, menu };
}
