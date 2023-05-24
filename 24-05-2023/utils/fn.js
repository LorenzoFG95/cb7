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
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();

  return data;
};

export const POST = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();

  return data;
};

export const DELETE = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
  });
  const data = await res.json();

  return data;
};

export const listGen = (item, parent) => {
  const taskEl = createEl("li", `${item.todo}`);
  const delBtnEl = createEl("span", `x`);

  taskEl.addEventListener("click", (e) => {
    taskEl.classList.toggle("checked");
  });

  delBtnEl.addEventListener("click", (e) => {
    if (item.id !== 99999) {
      DELETE(`/${item.id}`);
    }
    parent.removeChild(taskEl);
  });

  taskEl.append(delBtnEl);
  return taskEl;
};
