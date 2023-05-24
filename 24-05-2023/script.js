import { cE, qS, createEl, GET, POST, DELETE, listGen } from "./utils/fn.js";

const backgroundEl = createEl("div", "", {
  name: "class",
  value: "container",
});

const toDoApp = createEl("div", "", {
  name: "class",
  value: "todo__app",
});

const appTtitle = createEl("h2", "ToDo-list");
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

GET(`/user/1`).then((data) =>
  data.todos.forEach((item) =>
    listContainerEl.append(listGen(item, listContainerEl))
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
  listContainerEl.append(
    listGen(
      {
        id: 99999,
        todo: e.target[0].value,
        completed: false,
        userId: 1,
      },
      listContainerEl
    )
  );
  POST(`/add`, { todo: e.target[0].value, completed: false, userId: 1 });
});
