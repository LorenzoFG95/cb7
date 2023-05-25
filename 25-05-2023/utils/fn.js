export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

const BASE_URL = "https://dummyjson.com/todos";

export const GET = async (endpoint = "") => {
  try {
    const res = await fetch(BASE_URL + endpoint);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Mancata risposta dal server");
    }
  } catch (error) {
    alert(
      "C'è qualche problema, riprovare più tardi... \nIl tipo di errore è: " +
        error.message
    );
  }
};

export const POST = async (endpoint, body) => {
  try {
    const res = await fetch(BASE_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const data = await res.json();

      return data;
    } else {
      throw new Error("Invio dati al server fallito");
    }
  } catch (error) {
    alert(
      "In questo momento non riusciamo ad inviare i dati al server... \nIl tipo di errore è: " +
        error.message +
        "\nLe task saranno inserite solo in locale."
    );
  }
};

export const DELETE = async (endpoint) => {
  try {
    const res = await fetch(BASE_URL + endpoint, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();

      return data;
    } else {
      throw new Error("Invio richiesta DELETE al server fallita");
    }
  } catch (error) {
    alert(
      "C'è qualche problema... \nIl tipo di errore è: " +
        error.message +
        "\nLe task saranno rimosse solo in locale."
    );
  }
};

export const listItemGen = (item, parent) => {
  const taskEl = createEl("li", ``);
  const taskTextEl = createEl("input", ``, {
    name: "value",
    value: `${item.todo}`,
  });
  taskTextEl.setAttribute("readonly", "");
  const editBtnEl = createEl("span", `Edit`);
  const delBtnEl = createEl("span", `x`);

  taskEl.addEventListener("click", (e) => {
    taskEl.classList.toggle("checked");
    taskTextEl.classList.toggle("checked");
  });

  editBtnEl.addEventListener("click", (e) => {
    console.log("taskedit");
    taskTextEl.toggleAttribute("readonly");
    taskTextEl.classList.toggle("editable");
    taskEl.classList.toggle("checked");
    taskTextEl.classList.toggle("checked");
  });

  delBtnEl.addEventListener("click", (e) => {
    DELETE(`/${item.id}`);

    parent.removeChild(taskEl);
  });

  taskEl.append(taskTextEl, editBtnEl, delBtnEl);
  return taskEl;
};

export function slist(target) {
  let items = target.getElementsByTagName("li"),
    current = null;

  for (let i of items) {
    i.draggable = true;
    i.ondragstart = (e) => {
      current = i;
      for (let it of items) {
        if (it != current) {
          it.classList.add("hint");
        }
      }
    };
    i.ondragenter = (e) => {
      if (i != current) {
        i.classList.add("active");
      }
    };

    i.ondragleave = () => i.classList.remove("active");

    i.ondragend = () => {
      for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
      }
    };

    i.ondragover = (e) => e.preventDefault();

    i.ondrop = (e) => {
      e.preventDefault();
      if (i != current) {
        let currentpos = 0,
          droppedpos = 0;
        for (let it = 0; it < items.length; it++) {
          if (current == items[it]) {
            currentpos = it;
          }
          if (i == items[it]) {
            droppedpos = it;
          }
        }
        if (currentpos < droppedpos) {
          i.parentNode.insertBefore(current, i.nextSibling);
        } else {
          i.parentNode.insertBefore(current, i);
        }
      }
    };
  }
}
