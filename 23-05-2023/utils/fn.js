import { GET, POST, DELETE } from "./http.js";
import { userList } from "./credentials.js";

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

export const productGen = (productData) => {
  const wrapperEl = createEl("div", "", { name: "class", value: "cartItem" });
  const titleEl = createEl("h4", productData.title, {
    name: "src",
    value: productData.title,
  });
  const priceEl = createEl("p", "Price: " + productData.price, {
    name: "class",
    value: "cartItem__title",
  });
  const quantityEl = createEl("p", "Quantity: " + productData.quantity, {
    name: "class",
    value: "cartItem__quantity",
  });

  wrapperEl.append(titleEl, priceEl, quantityEl);

  return wrapperEl;
};

export const createLogIn = () => {
  const wrapperEl = cE("div");
  const loginFormEl = cE("form");
  const usernameInputEl = cE("input");
  const passwordInputEl = cE("input");
  const submitBtnEl = cE("input");
  const createCartBtnEl = cE("button");

  wrapperEl.className = "login";
  loginFormEl.className = "loginForm";
  usernameInputEl.type = "text";
  usernameInputEl.placeholder = "Username";
  passwordInputEl.type = "password";
  passwordInputEl.placeholder = "Password";
  submitBtnEl.type = "submit";
  submitBtnEl.className = "button";
  createCartBtnEl.className = "createCartButton";
  createCartBtnEl.textContent = "Clicca qui per creare un nuovo carrello";

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const credentialsMatch = userList.find(
      (user) =>
        user.username === event.srcElement[0].value &&
        user.password === event.srcElement[1].value
    );

    if (credentialsMatch) {
      alert(`Benvenuto, ${event.srcElement[0].value}`);
      const userId = credentialsMatch.id;

      document.body.removeChild(wrapperEl);
      const wrapperCartEl = createEl("div", "", {
        name: "class",
        value: "cartList",
      });
      const cartUserTitleEl = createEl(
        "h1",
        `Questo è il carrello di ${event.srcElement[0].value}`,
        {
          name: "class",
          value: "UserTitle",
        }
      );
      document.body.append(cartUserTitleEl, wrapperCartEl);
      document.body.style.backgroundColor = "rgba(32, 178, 171, 0.5)";

      GET(`/carts/${userId}`).then((data) =>
        data.products.forEach((product) =>
          wrapperCartEl.append(productGen(product))
        )
      );
    } else {
      alert(
        `Username e/o password non corretta, 'Prova con "Lorenzo" e "Password1!" oppure "Giuseppe" e "Password2!" oppure "Giovanni" e "Password3!" oppure "Silvia" e "Password4!"'`
      );
    }
  });

  createCartBtnEl.addEventListener("click", (e) => {
    document.body.removeChild(wrapperEl);
    const newCartWrapperEl = createEl("div", "", {
      name: "class",
      value: "newCart",
    });
    const cartCreatorFormEl = createEl("form", "", {
      name: "class",
      value: "cartForm",
    });
    const newCartTitle = createEl("h2", "Benvenuto", {
      name: "class",
      value: "newCartTitle",
    });
    const idSelectorEl = cE("input");
    idSelectorEl.className = "cartFormIdInput";
    idSelectorEl.type = "text";
    idSelectorEl.placeholder = "Inserisci qui il tuo ID";

    const cartItemIdLabel = createEl("p", "ID prodotto", {
      name: "class",
      value: "cartItemIdLabel",
    });
    const cartItemIdInput = cE("input");
    cartItemIdInput.className = "cartItemIdInput";
    cartItemIdInput.type = "text";
    cartItemIdInput.placeholder = "Inserisci qui ID prodotto";
    const cartItemQuantityLabel = createEl("p", "Quantità", {
      name: "class",
      value: "cartItemQuantityLabel",
    });
    const cartItemQuantityInput = cE("input");
    cartItemQuantityInput.className = "cartItemQuantityInput";
    cartItemQuantityInput.type = "text";
    cartItemQuantityInput.placeholder = "Quantità prodotti";

    const addToCartBtn = cE("button");
    addToCartBtn.textContent = "AGGIUNGI";

    const newCartTemp = [];
    const tempCart = cE("p");
    let userID = "";
    idSelectorEl.addEventListener("change", (e) => (userID = e.target.value));

    let tempId = "";
    cartItemIdInput.addEventListener(
      "change",
      (e) => (tempId = e.target.value)
    );
    let tempQuantity = "";
    cartItemQuantityInput.addEventListener(
      "change",
      (e) => (tempQuantity = e.target.value)
    );

    addToCartBtn.addEventListener("click", (e) => {
      e.preventDefault();
      newCartTemp.push({
        id: tempId,
        quantity: tempQuantity,
      });
      tempCart.textContent = `Ultimo prodotto pronto per essere aggiunto al carrello: ID ${tempId} Quantità ${tempQuantity}`;
    });

    const newCartInstructions = createEl(
      "p",
      "Inserisci id prodotto e quantità desiderata, conferma con AGGIUNGI. Quando hai finito, premi POST per inviare il nuovo carrello al server",
      { name: "class", value: "cartInstructions" }
    );

    const postBtnEl = cE("button");
    postBtnEl.textContent = "POST";

    postBtnEl.addEventListener("click", (e) => {
      e.preventDefault();
      POST("/carts/add", {
        userId: userID,
        products: newCartTemp,
      });
    });

    cartCreatorFormEl.append(
      newCartTitle,
      idSelectorEl,
      cartItemIdLabel,
      cartItemIdInput,
      cartItemQuantityLabel,
      cartItemQuantityInput,
      addToCartBtn,
      newCartInstructions,
      postBtnEl
    );
    newCartWrapperEl.append(cartCreatorFormEl, tempCart);
    document.body.append(newCartWrapperEl);
  });

  loginFormEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
  wrapperEl.append(loginFormEl, createCartBtnEl);
  return wrapperEl;
};
