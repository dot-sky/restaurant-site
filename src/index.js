import "./styles.css";
import { createHomePage } from "./homePage.js";
import { createMenuPage } from "./menuPage.js";
import { createAboutPage } from "./aboutPage.js";

const pageController = (function (doc) {
  const homeBtn = doc.querySelector("button#home-btn");
  const menuBtn = doc.querySelector("button#menu-btn");
  const aboutBtn = doc.querySelector("button#about-btn");
  const contentContainer = doc.querySelector("div#content");
  let selectedBtn = homeBtn;

  const homePage = createHomePage(doc);
  const menuPage = createMenuPage(doc);
  const aboutPage = createAboutPage(doc);

  const bindEvents = () => {
    homeBtn.addEventListener("click", (event) =>
      setCurrentPage(event.target, homePage)
    );
    menuBtn.addEventListener("click", (event) =>
      setCurrentPage(event.target, menuPage)
    );
    aboutBtn.addEventListener("click", (event) =>
      setCurrentPage(event.target, aboutPage)
    );
  };
  const setCurrentPage = (btnClicked, page) => {
    selectedBtn.classList.remove("selected");
    btnClicked.classList.add("selected");

    selectedBtn = btnClicked;

    switchContent(page);
  };
  const switchContent = (content) => {
    contentContainer.textContent = "";
    contentContainer.appendChild(content);
  };

  bindEvents();
  setCurrentPage(homeBtn, homePage);
})(document);
