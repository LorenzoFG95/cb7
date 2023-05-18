export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);
export let total = 0;
import { cartItemsList } from "../script.js";

export const createProduct = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const dividerEl = cE("hr");
  const ratingEl = cE("p");
  const dividerEl1 = cE("hr");
  const priceEl = cE("h4");

  wrapperEl.className = "productCard";

  wrapperEl.classList.add(`cardID=${data.id}`);
  wrapperEl.setAttribute("id", data.id);

  textWrapperEl.className = "productCard__text";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  dividerEl.className = "solid";
  dividerEl1.className = "solid";
  ratingEl.textContent = data.rating + " ⭐";
  priceEl.textContent = data.price + " $";

  textWrapperEl.append(
    titleEl,
    descriptionEl,
    dividerEl,
    ratingEl,
    dividerEl1,
    priceEl
  );
  wrapperEl.append(imageEl, textWrapperEl);
  return wrapperEl;
};

export const createModal = (data, parent = null, id = null) => {
  const modalWrapperEl = cE("div");
  const modalOverlay = cE("div");
  const modalImgEl = cE("img");
  const modalTextEl = cE("div");
  const modalTtitleEl = cE("h1");
  const modalDescriptionEl = cE("p");
  const modalRatingEl = cE("p");
  const modalPrice = cE("p");
  const modalButtons = cE("div");
  const modalButton1 = cE("button");
  const modalButton2 = cE("button");
  const modalCloseButton = cE("button");

  data.forEach((data) => {
    if (data.id == id) {
      modalWrapperEl.className = "modalWrapperEl";
      modalOverlay.className = "modalOverlay";
      modalImgEl.src = data.thumbnail;
      modalTextEl.className = "modalTextEl";
      modalTtitleEl.textContent = data.title;
      modalDescriptionEl.textContent = data.description;
      modalRatingEl.textContent = data.rating + " ⭐";
      modalPrice.textContent = data.price + " $";
      modalButtons.className = "modalButtons";
      modalButton1.textContent = "Add to cart";
      modalButton1.classList.add("button");
      modalButton2.textContent = "Go back";
      modalButton2.classList.add("button");
      modalCloseButton.textContent = "X";
      modalCloseButton.className = "modalCloseButton";

      modalButtons.append(modalButton1, modalButton2);
      modalTextEl.append(
        modalTtitleEl,
        modalDescriptionEl,
        modalRatingEl,
        modalPrice,
        modalButtons
      );
      modalWrapperEl.append(
        modalOverlay,
        modalImgEl,
        modalTextEl,
        modalCloseButton
      );
      if (parent) {
        modalOverlay.addEventListener("click", () =>
          parent.removeChild(modalWrapperEl)
        );
        modalCloseButton.addEventListener("click", () =>
          parent.removeChild(modalWrapperEl)
        );
        modalButton2.addEventListener("click", () =>
          parent.removeChild(modalWrapperEl)
        );
      }
      modalButton1.addEventListener("click", () => {
        cartItemsList.push(data);
        cartItemsList.sort((a, b) => a.id - b.id);
        alert("Product added to cart");
      });
    }
  });
  return modalWrapperEl;
};

export const addCartItem = (item, n) => {
  const cartItem = cE("div");
  cartItem.textContent = item.title;
  cartItem.className = "cartItem";

  const cartItemCounter = cE("div");
  cartItemCounter.textContent = `Quantity = ${n}`;
  const cartItemPrice = cE("div");
  let prezzo = item.price * n;
  cartItemPrice.textContent = `Price = ${prezzo} $`;
  total = total + prezzo;
  cartItem.append(cartItemCounter, cartItemPrice);

  return cartItem;
};
