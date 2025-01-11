import "./aboutPage.css";
export function createAboutPage(doc) {
  const main = createAboutPageElements(doc);
  return main;
  // fill
  // add to main
}
function createAboutPageElements(doc) {
  //create elements
  const mainContainer = document.createElement("div");
  const title = document.createElement("h1");
  // fill content
  title.textContent = "About page";
  // add to main
  mainContainer.appendChild(title);
  return mainContainer;
}
