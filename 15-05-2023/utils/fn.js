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
