import lunchImg from "./assets/tableware_128.png";
import breakfastImg from "./assets/tea_128.png";
import pastryImg from "./assets/croissant_128.png";

export function createHomePage(doc) {
  const main = createHomepageElements(doc);
  return main;
  // fill
  // add to main
}
function createHomepageElements(doc) {
  //create elements
  const mainContainer = document.createElement("div");
  const heroContainer = document.createElement("div");
  const cardSection = document.createElement("div");
  const hoursSection = document.createElement("div");
  const mapSection = document.createElement("div");

  const heroTitle = document.createElement("h1");
  const heroDesc = document.createElement("p");

  const hoursImage = document.createElement("div");
  const hoursContainer = document.createElement("div");

  const mapContainer = document.createElement("div");
  const mapDesc = document.createElement("div");
  // fillContent
  heroTitle.textContent = "Dreamer's Place";
  heroDesc.textContent = "Your place for healthy and delicious food!";
  const cardsImg = {
    lunch: lunchImg,
    breakfast: breakfastImg,
    pastry: pastryImg,
  };
  // creating cards
  for (let elem in cardsImg) {
    const cardInfo = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardDesc = document.createElement("p");

    cardImg.setAttribute("src", cardsImg[elem]);
    cardDesc.textContent = elem;

    cardInfo.appendChild(cardImg);
    cardInfo.appendChild(cardDesc);

    cardSection.appendChild(cardInfo);
    // console.log({ card, value: cards[card] });
  }
  const card = document.createElement("div");

  // add
  heroContainer.appendChild(heroTitle);
  heroContainer.appendChild(heroDesc);

  // adding to main container
  mainContainer.appendChild(heroContainer);
  mainContainer.appendChild(cardSection);

  return mainContainer;
}
