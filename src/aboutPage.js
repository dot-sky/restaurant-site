import tablePlate from "./assets/img/table-plate.jpg";
import "./aboutPage.css";

export function createAboutPage(doc) {
  const mainContainer = doc.createElement("div");
  const sectionContainer = createSectionAbout(doc);

  mainContainer.classList.add("about-container");

  mainContainer.appendChild(sectionContainer);
  return mainContainer;
}

function createSectionAbout(doc) {
  const section = doc.createElement("div");
  const imgContainer = doc.createElement("div");
  const textContainer = doc.createElement("div");
  const img = doc.createElement("img");
  const title = doc.createElement("h2");
  const desc = doc.createElement("p");
  const highlight = doc.createElement("span");
  const beforeText = doc.createTextNode(
    "We're here to make healthy eating easy and delicious. At "
  );
  const afterText = doc.createTextNode(
    ", we're all about fresh ingredients, bold flavors, and food that makes you feel good. whether you're stopping by for a quick bite or a relaxed meal, we're here to make every moment tasty and satisfying."
  );

  title.textContent = "About Us";
  highlight.textContent = "Vitalicious";
  img.setAttribute("src", tablePlate);
  img.setAttribute("alt", "A table from a restaurant.");

  section.classList.add("section-50");
  imgContainer.classList.add("img-hours-container");
  textContainer.classList.add("about-us");
  highlight.classList.add("text-primary");
  highlight.classList.add("bold");

  desc.appendChild(beforeText);
  desc.appendChild(highlight);
  desc.appendChild(afterText);
  imgContainer.appendChild(img);
  textContainer.appendChild(title);
  textContainer.appendChild(desc);

  section.appendChild(imgContainer);
  section.appendChild(textContainer);

  return section;
}
