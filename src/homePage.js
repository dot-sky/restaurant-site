import lunchImg from "./assets/tableware_128.png";
import breakfastImg from "./assets/tea_128.png";
import pastryImg from "./assets/croissant_128.png";
import plate from "./assets/plate.jpg";
import logoImg from "./assets/icons/chef-hat.png";
import "./homePage.css";
export function createHomePage(doc) {
  const mainContainer = doc.createElement("div");
  const { cardItems, days, map } = getDataObjects();

  const heroContainer = createHeroSection(doc);
  const cardSection = createCardsSection(doc, cardItems);
  const hoursSection = createHoursSection(doc, days);
  const mapSection = createMapSection(doc, map);

  mainContainer.appendChild(heroContainer);
  mainContainer.appendChild(cardSection);
  mainContainer.appendChild(hoursSection);
  mainContainer.appendChild(mapSection);

  return mainContainer;
}

function getDataObjects() {
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
  return { cardItems, days, map };
}

function createHeroSection(doc) {
  const heroContainer = doc.createElement("div");
  const logo = doc.createElement("img");
  const heroTitle = doc.createElement("h1");
  const heroDesc = doc.createElement("p");

  heroTitle.textContent = "VitaliciouS";
  heroDesc.textContent = "Your place for healthy and delicious food!";
  logo.setAttribute("src", logoImg);

  heroContainer.classList.add("hero-container");
  logo.classList.add("hero-logo");

  heroContainer.appendChild(logo);
  heroContainer.appendChild(heroTitle);
  heroContainer.appendChild(heroDesc);
  return heroContainer;
}

function createCardsSection(doc, cards) {
  const cardSection = doc.createElement("div");
  cardSection.classList.add("card-section");

  for (let item of cards) {
    const cardItem = doc.createElement("div");
    const img = doc.createElement("img");
    const title = doc.createElement("p");
    const desc = doc.createElement("p");

    title.textContent = item.title;
    desc.textContent = item.desc;
    img.setAttribute("src", item.img);

    cardItem.classList.add("card-item");

    cardItem.appendChild(img);
    cardItem.appendChild(title);
    cardItem.appendChild(desc);

    cardSection.appendChild(cardItem);
  }
  return cardSection;
}

function createHoursSection(doc, daysObj) {
  const hoursSection = doc.createElement("div");
  const imgWrapper = doc.createElement("div");
  const textContainer = doc.createElement("div");
  const hoursImg = doc.createElement("img");
  const title = doc.createElement("h2");
  const desc = doc.createElement("p");
  const daysList = doc.createElement("ul");

  title.textContent = "Visit Us";
  desc.textContent = "We are dedicated to give you the best experience";
  hoursImg.setAttribute("src", plate);
  hoursImg.setAttribute(
    "alt",
    "Two plates in a table, one of them containing a salad."
  );

  for (let day of daysObj) {
    const li = doc.createElement("li");
    const spanPrimary = doc.createElement("span");

    spanPrimary.textContent = day.nameDay;
    li.textContent = day.hour;

    spanPrimary.classList.add("text-primary");

    li.prepend(spanPrimary);
    daysList.appendChild(li);
  }

  hoursSection.classList.add("section-50");
  imgWrapper.classList.add("img-hours-container");
  textContainer.classList.add("hours");
  daysList.classList.add("h5");
  daysList.classList.add("text-light");

  imgWrapper.appendChild(hoursImg);
  textContainer.appendChild(title);
  textContainer.appendChild(desc);
  textContainer.appendChild(daysList);

  hoursSection.appendChild(imgWrapper);
  hoursSection.appendChild(textContainer);
  return hoursSection;
}

function createMapSection(doc, mapObj) {
  const mapSection = doc.createElement("div");
  const textContainer = doc.createElement("div");
  const mapContainer = doc.createElement("div");
  const title = doc.createElement("h2");
  const address = doc.createElement("p");
  const desc = doc.createElement("p");
  const iframeM = doc.createElement("iframe");

  title.textContent = "Find Us Here";
  address.textContent = "5th Ave & 86th St, New York, NY 10028, USA.";
  desc.textContent =
    "Located near Central Park, our restaurant is the perfect spot to enjoy a meal after exploring the city's iconic landmarks. Discover us here!";
  // adding attributes to iframe
  for (const key in mapObj) {
    iframeM.setAttribute(key, mapObj[key]);
  }

  textContainer.classList.add("map-text");
  mapContainer.classList.add("map-container");
  address.classList.add("text-primary");
  mapSection.classList.add("section-50");

  textContainer.appendChild(title);
  textContainer.appendChild(address);
  textContainer.appendChild(desc);
  mapContainer.appendChild(iframeM);

  mapSection.appendChild(textContainer);
  mapSection.appendChild(mapContainer);
  return mapSection;
}
