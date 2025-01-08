import "./styles.css";
import { testVar } from "./module.js";
import { createHomePage } from "./homePage.js";
import { createMenuPage } from "./menuPage.js";
import { createAboutPage } from "./aboutPage.js";
const pageController = (function () {
  // DOM selection
  const homeBtn = document.querySelector("button#home-btn");
  const menuBtn = document.querySelector("button#menu-btn");
  const aboutBtn = document.querySelector("button#about-btn");
  const contentContainer = document.querySelector("div#content");

  // pages creation
  const homePage = createHomePage();
  const menuPage = createMenuPage();
  const aboutPage = createAboutPage();

  const bindEvents = () => {
    homeBtn.addEventListener("click", () => switchContent(homePage));
    menuBtn.addEventListener("click", () => switchContent(menuPage));
    aboutBtn.addEventListener("click", () => switchContent(aboutPage));
  };

  const switchContent = (content) => {
    console.log("switch content");
    console.log(content);

    contentContainer.textContent = "";
    contentContainer.appendChild(content);
  };
  bindEvents();
})();
