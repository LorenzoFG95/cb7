const bodyParts = [
  {
    id: 1,
    title: "face",
    isInside: false,
  },
  {
    id: 2,
    title: "liver",
    isInside: true,
  },
  {
    id: 3,
    title: "bones",
    isInside: true,
  },
  {
    id: 4,
    title: "arm",
    isInside: false,
  },
  {
    id: 5,
    title: "brain",
    isInside: true,
  },
  {
    id: 6,
    title: "hair",
    isInside: false,
  },
];

// const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const container = cE("div");
const list = cE("ul");
container.className = "container";
const title = cE("h2");
title.className = "title";
const note = cE("em");

title.textContent = "List of bodyparts";
note.textContent = "Internal organs are in red";

bodyParts.forEach((element) => {
  const item = cE("li");
  item.textContent = element.title;
  item.className = "item";
  list.appendChild(item);
  if (element.isInside) {
    item.classList.add("internal-organ");
    console.log("Inside");
  }
});

document.body.append(title, container, note);
container.appendChild(list);
