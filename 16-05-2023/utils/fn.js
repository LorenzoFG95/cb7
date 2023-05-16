export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

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
  const buttonEl = cE("button");

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
  buttonEl.className = "button";
  buttonEl.textContent = "Add to Cart";

  textWrapperEl.append(
    titleEl,
    descriptionEl,
    dividerEl,
    ratingEl,
    dividerEl1,
    priceEl,
    buttonEl
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
      modalButton1.textContent = "Buy now";
      modalButton1.classList.add("button");
      modalButton2.textContent = "Go back";
      modalButton2.classList.add("button");
      modalCloseButton.textContent = "X";
      modalCloseButton.className = "modalCloseButton";

      console.log("è dentro");
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
    }
  });
  return modalWrapperEl;
};
