import "./menuPage.css";
export function createMenuPage(doc) {
  const main = createMenuElements(doc);
  return main;
  // fill
  // add to main
}
function createMenuElements(doc) {
  //create elements
  const mainContainer = document.createElement("div");
  const title = document.createElement("h1");
  // fill content
  title.textContent = "Menu page";
  // add to main
  mainContainer.appendChild(title);
  return mainContainer;
}
