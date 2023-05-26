//Aggiunte le funzionalità riguardo il local storage:
//adesso al refresh della pagina le task rimangono le stesse;
//all'edit delle task, queste vengono modificate nello storage;
//aggiustato un bug per il quale al click del pulsante edit, la task si segnava come completata;
//anche lo stato di completato o meno viene mantenuto al refresh;
//Per quanto riguarda l'esercizio avanzato... gli oggetti sessionStorage sono quasi uguali ai localStorage: la differenza fondamentale è che sono limitate a una tab del browser(mentre le informazioni contenute nel localStorage sono condivise anche in più tab aperte) e di conseguenza non sopravvivono alla chiusura della tab.

import { cE, qS, createEl, GET, POST, DELETE, slist } from "./utils/fn.js";

export let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

function renderItems() {
  listContainerEl.textContent = "";
  toDoList.forEach((item) => listContainerEl.append(listItemGen(item)));
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

const backgroundEl = createEl("div", "", {
  name: "class",
  value: "container",
});

const toDoApp = createEl("div", "", {
  name: "class",
  value: "todo__app",
});

const appTtitle = createEl("h2", "To-Do list");
const appTtitleIcon = createEl(
  "img",
  "",
  {
    name: "src",
    value: "./images/icon.png",
  },
  {
    name: "alt",
    value: "todo icon",
  }
);

const toDoAppForm = createEl("form", "", {
  name: "class",
  value: "row",
});

const toDoAppInput = createEl(
  "input",
  "",
  {
    name: "type",
    value: "text",
  },
  {
    name: "id",
    value: "input-box",
  },
  {
    name: "placeholder",
    value: "Add your text",
  }
);

const toDoAppBtn = createEl(
  "input",
  "",
  {
    name: "type",
    value: "submit",
  },
  {
    name: "class",
    value: "button",
  },
  {
    name: "value",
    value: "Add",
  }
);
const listContainerEl = createEl("ul", "", {
  name: "id",
  value: "list-container",
});
listContainerEl.classList.add("slist");

toDoAppForm.append(toDoAppInput, toDoAppBtn);
appTtitle.append(appTtitleIcon);
toDoApp.append(appTtitle, toDoAppForm, listContainerEl);
backgroundEl.append(toDoApp);
document.body.append(backgroundEl);

// Events
toDoAppForm.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    if (e.target[0].value !== "") {
      toDoList.push({
        id: Date.now(),
        todo: e.target[0].value,
        completed: false,
        userId: 1,
      });
      renderItems();
    } else {
      throw new Error("Una task deve contenere del testo");
    }
  } catch (error) {
    alert(error);
  }

  e.target[0].value = "";
});

listContainerEl.addEventListener("click", (e) => {
  slist(listContainerEl);
});

const listItemGen = (item) => {
  const taskEl = createEl("li", ``);
  const taskTextEl = createEl("input", ``, {
    name: "value",
    value: `${item.todo}`,
  });
  taskTextEl.setAttribute("readonly", "");
  const editBtnEl = createEl("span", `Edit`);
  const delBtnEl = createEl("span", `x`);

  editBtnEl.addEventListener("click", (e) => {
    taskTextEl.toggleAttribute("readonly");
    taskTextEl.classList.toggle("editable");

    item.todo = e.srcElement.parentNode.childNodes[0].value;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  });

  if (item.completed) {
    taskEl.classList.toggle("checked");
    taskTextEl.classList.toggle("checked");
  }

  taskEl.addEventListener("click", (e) => {
    if (e.target.innerText === "Edit") {
      return;
    } else if (!taskTextEl.classList.contains("editable")) {
      taskEl.classList.toggle("checked");
      taskTextEl.classList.toggle("checked");
      item.completed = !item.completed;
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
  });

  delBtnEl.addEventListener("click", (e) => {
    toDoList = toDoList.filter((task) => task.id !== item.id);
    renderItems();
  });

  taskEl.append(taskTextEl, editBtnEl, delBtnEl);
  return taskEl;
};

renderItems();
