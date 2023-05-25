import {
  cE,
  qS,
  createEl,
  GET,
  POST,
  DELETE,
  listItemGen,
  slist,
} from "./utils/fn.js";

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

GET(`/user/1`).then((data) =>
  data.todos.forEach((item) =>
    listContainerEl.append(listItemGen(item, listContainerEl))
  )
);

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
      listContainerEl.append(
        listItemGen(
          {
            id: 99999,
            todo: e.target[0].value,
            completed: false,
            userId: 1,
          },
          listContainerEl
        )
      );
    } else {
      throw new Error("Una task deve contenere del testo");
    }
  } catch (error) {
    alert(error);
  }
  POST(`/add`, { todo: e.target[0].value, completed: false, userId: 1 });
  e.target[0].value = "";
});

listContainerEl.addEventListener("click", (e) => {
  slist(listContainerEl);
});

/////////////////// ESERCIZI 25-05-2023

// aggiunti il try e catch ad ogni fetch con alert personalizzati in caso di errore.

//Esercizio avanzato

// aggiunto il try e catch anche nel caso si provasse ad inserire una task senza aver scritto niente nell'input.
// aggiunta la funzionalità che dopo aver premuto Add, resetta il campo del testo
// aggiunto il drag e drop agli elementi per poterli posizionare a piacimento
// aggiunto pulsante che rende una task editabile
