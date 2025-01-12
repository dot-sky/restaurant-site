import "./styles.css";
import { createHomePage } from "./homePage.js";
import { createMenuPage } from "./menuPage.js";
import { createAboutPage } from "./aboutPage.js";
const pageController = (function (doc) {
  // DOM selection
  const homeBtn = doc.querySelector("button#home-btn");
  const menuBtn = doc.querySelector("button#menu-btn");
  const aboutBtn = doc.querySelector("button#about-btn");
  const contentContainer = doc.querySelector("div#content");

  // pages creation
  const homePage = createHomePage(doc);
  const menuPage = createMenuPage(doc);
  const aboutPage = createAboutPage(doc);

  const bindEvents = () => {
    homeBtn.addEventListener("click", () => switchContent(homePage));
    menuBtn.addEventListener("click", () => switchContent(menuPage));
    aboutBtn.addEventListener("click", () => switchContent(aboutPage));
  };

  const switchContent = (content) => {
    contentContainer.textContent = "";
    contentContainer.appendChild(content);
  };
  bindEvents();
  switchContent(homePage);
})(document);
