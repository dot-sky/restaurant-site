import lunchImg from "./assets/tableware_128.png";
import breakfastImg from "./assets/tea_128.png";
import pastryImg from "./assets/croissant_128.png";
import plate from "./assets/plate.jpg";
import "./homePage.css";
export function createHomePage(doc) {
  const main = createHomepageElements(doc);
  return main;
  // fill
  // add to main
}
const imgPath = "./assets/";
const cardItems = [
  {
    title: "Breakfast",
    desc: "Feel-good mornings start here.",
    img: lunchImg,
  },
  {
    title: "Breakfast",
    desc: "Feel-good mornings start here.",
    img: breakfastImg,
  },
  {
    title: "Breakfast",
    desc: "Feel-good mornings start here.",
    img: pastryImg,
  },
];
const days = [
  {
    nameDay: "Monday",
    hour: "7:00am to 10:00pm",
  },
  {
    nameDay: "Tuesday",
    hour: "7:00am to 10:00pm",
  },
  {
    nameDay: "Wednesday",
    hour: "7:00am to 10:00pm",
  },
  {
    nameDay: "Thursday",
    hour: "7:00am to 10:00pm",
  },
  {
    nameDay: "Friday",
    hour: "7:00am to 10:00pm",
  },
  {
    nameDay: "Saturday",
    hour: "7:30am to 9:00pm",
  },
  {
    nameDay: "Sunday",
    hour: "7:30am to 9:00pm",
  },
];
const map = {
  src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3021.032573452489!2d-73.97717992428574!3d40.783298033248215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ2JzU5LjkiTiA3M8KwNTgnMjguNiJX!5e0!3m2!1sen!2sbo!4v1736680519434!5m2!1sen!2sbo",
  width: "100%",
  height: "450",
  style: "border:0;",
  allowfullscreen: "",
  loading: "lazy",
  referrerpolicy: "no-referrer-when-downgrade",
};
function createHomepageElements(doc) {
  //create elements
  const mainContainer = document.createElement("div");

  const heroContainer = document.createElement("div");
  const cardSection = document.createElement("div");
  const hoursSection = document.createElement("div");
  const mapSection = document.createElement("div");

  const heroTitle = document.createElement("h1");
  const heroDesc = document.createElement("p");

  const hoursImageWrapper = document.createElement("div");
  const hoursContainer = document.createElement("div");

  const hoursTitle = document.createElement("h2");
  const hoursDesc = document.createElement("p");
  const daysList = document.createElement("ul");

  const mapText = document.createElement("div");
  const mapContainer = document.createElement("div");

  const mapTitle = document.createElement("h2");
  const mapAddress = document.createElement("p");
  const mapDesc = document.createElement("p");
  const iframeMap = document.createElement("iframe");

  // fillContent
  heroTitle.textContent = "Dreamer's Place";
  heroDesc.textContent = "Your place for healthy and delicious food!";

  hoursTitle.textContent = "Visit Us";
  hoursDesc.textContent = "We are dedicated to give you the best experience";

  mapTitle.textContent = "Find Us Here";
  mapAddress.textContent = "5th Ave & 86th St, New York, NY 10028, USA.";
  mapDesc.textContent =
    "Located near Central Park, our restaurant is the perfect spot to enjoy a meal after exploring the city's iconic landmarks. Discover us here!";
  // add classes
  heroContainer.classList.add("hero-container");
  cardSection.classList.add("card-section");

  hoursSection.classList.add("section-50");
  hoursImageWrapper.classList.add("img-hours-container");
  hoursContainer.classList.add("hours");
  daysList.classList.add("h5");
  daysList.classList.add("text-light");

  mapText.classList.add("map-text");
  mapContainer.classList.add("map-container");
  mapAddress.classList.add("text-primary");
  mapSection.classList.add("section-50");
  // creating cards
  for (let item of cardItems) {
    // DOM creation
    const cardItem = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardTitle = document.createElement("p");
    const cardDesc = document.createElement("p");
    // add class
    cardItem.classList.add("card-item");
    // content
    cardImg.setAttribute("src", item.img);
    cardTitle.textContent = item.title;
    cardDesc.textContent = item.desc;
    // add to card
    cardItem.appendChild(cardImg);
    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardDesc);
    // add to container
    cardSection.appendChild(cardItem);
  }
  // creating hours section
  const hoursImg = document.createElement("img");
  hoursImg.setAttribute("src", plate);
  hoursImg.setAttribute(
    "alt",
    "Two plates in a table, one of them containing a salad."
  );

  // creating hours list
  // add
  for (let day of days) {
    const li = document.createElement("li");
    const spanPrimary = document.createElement("span");

    // classes
    spanPrimary.classList.add("text-primary");
    // content
    spanPrimary.textContent = day.nameDay;
    li.textContent = day.hour;
    // add
    li.prepend(spanPrimary);
    // add to ul
    daysList.appendChild(li);
  }
  // modifying map iframe
  for (const key in map) {
    iframeMap.setAttribute(key, map[key]);
  }
  // hero
  heroContainer.appendChild(heroTitle);
  heroContainer.appendChild(heroDesc);
  // hours
  hoursImageWrapper.appendChild(hoursImg);
  hoursContainer.appendChild(hoursTitle);
  hoursContainer.appendChild(hoursDesc);
  hoursContainer.appendChild(daysList);
  hoursSection.appendChild(hoursImageWrapper);
  hoursSection.appendChild(hoursContainer);
  // map
  mapText.appendChild(mapTitle);
  mapText.appendChild(mapAddress);
  mapText.appendChild(mapDesc);
  mapContainer.appendChild(iframeMap);
  mapSection.appendChild(mapText);
  mapSection.appendChild(mapContainer);
  // adding to main container
  mainContainer.appendChild(heroContainer);
  mainContainer.appendChild(cardSection);
  mainContainer.appendChild(hoursSection);
  mainContainer.appendChild(mapSection);
  return mainContainer;
}
