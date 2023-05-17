import { cE, qS, createProduct, createModal } from "./utils/fn.js";

const rootEl = qS("#root");
const productList = cE("div");
const searchBar = qS("#search");
const priceRange = qS(".priceRange");
const categoryFilter = qS(".categoryFilter");
const ratingRange = qS(".ratingRange");
const filters = qS(".filters");

productList.className = "productList";

let allProducts = [];
let searchInput = "";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    );
    allProducts = data.products;
  })
  .then((data) =>
    productList.addEventListener("click", (e) => {
      const target = e.target.closest(".productCard");
      rootEl.append(createModal(allProducts, rootEl, target.id));
    })
  );

rootEl.append(productList);

// spotlight effect
window.addEventListener("DOMContentLoaded", () => {
  const spotlight = document.querySelector(".spotlight");

  let spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";

  window.addEventListener("mousemove", (e) => updateSpotlight(e));

  window.addEventListener("mousedown", (e) => {
    spotlightSize = "transparent 130px, rgba(0, 0, 0, 0.95) 150px)";

    updateSpotlight(e);
  });

  window.addEventListener("mouseup", (e) => {
    spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px)";

    updateSpotlight(e);
  });

  function updateSpotlight(e) {
    spotlight.style.backgroundImage = `radial-gradient(circle at ${
      (e.pageX / window.innerWidth) * 100
    }% ${(e.pageY / window.innerHeight) * 150}%, ${spotlightSize}`;
  }
});

// In questo modo il search riesce a filtrare le cards per titolo, descrizione, marca e categoria
searchBar.addEventListener("input", (e) => {
  searchInput = e.target.value.toLowerCase();
  if (e.target.value.length >= 3) {
    productList.textContent = ""; //resetta il contenuto di productList
    allProducts
      .filter(
        (product) =>
          product.title.toLowerCase().includes(searchInput) ||
          product.description.toLowerCase().includes(searchInput) ||
          product.brand.toLowerCase().includes(searchInput) ||
          product.category.toLowerCase().includes(searchInput)
      )
      .forEach((product) => productList.append(createProduct(product)));
  } else {
    //resetta il contenuto di productList e rimette tutte le card quando svuotiamo l'imput
    productList.textContent = "";
    allProducts.forEach((product) =>
      productList.append(createProduct(product))
    );
  }
});

// Usando funzioni simili sono riuscito a rendere anche i filtri funzionanti
priceRange.addEventListener("change", function (e) {
  if (e.target.value) {
    productList.textContent = "";
    allProducts
      .filter(
        (product) =>
          product.price > e.target.value.split("-")[0] &&
          product.price <= e.target.value.split("-")[1]
      )
      .forEach((product) => productList.append(createProduct(product)));
  } else {
    productList.textContent = "";
    allProducts.forEach((product) =>
      productList.append(createProduct(product))
    );
  }
});

categoryFilter.addEventListener("change", function (e) {
  if (e.target.value) {
    productList.textContent = "";
    allProducts
      .filter((product) => product.category.includes(e.target.value))
      .forEach((product) => productList.append(createProduct(product)));
  } else {
    productList.textContent = "";
    allProducts.forEach((product) =>
      productList.append(createProduct(product))
    );
  }
});

ratingRange.addEventListener("change", function (e) {
  if (e.target.value) {
    productList.textContent = "";
    allProducts
      .filter(
        (product) =>
          product.rating > e.target.value.split("-")[0] &&
          product.rating < e.target.value.split("-")[1]
      )
      .forEach((product) => productList.append(createProduct(product)));
  } else {
    productList.textContent = "";
    allProducts.forEach((product) =>
      productList.append(createProduct(product))
    );
  }
});

/////////// Qui in basso sto provando a unire i vari filtri in un'unica funzione (non era richiesto nell'esercitazione), per poter settare più filtri contemporaneamente.
// let priceRangeValue = "";
// let categoryFilterValue = "";
// let ratingRangeValue = "";
// let filteredProducts;
// filters.addEventListener("change", (e) => {
//   filteredProducts = allProducts;

//   if (e.target.className === "priceRange") {
//     priceRangeValue = e.target.value;
//   } else if (e.target.className === "categoryFilter") {
//     categoryFilterValue = e.target.value;
//   } else if (e.target.className === "ratingRange") {
//     ratingRangeValue = e.target.value;
//   }
//   if (priceRangeValue) {
//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         product.price > priceRangeValue.split("-")[0] &&
//         product.price <= priceRangeValue.split("-")[1]
//     );
//   }
//   if (categoryFilterValue) {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.category.includes(e.target.value)
//     );
//   }

//   if (ratingRangeValue) {
//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         product.rating > ratingRangeValue.split("-")[0] &&
//         product.rating < ratingRangeValue.split("-")[1]
//     );
//   }
//   productList.textContent = "";
//   filteredProducts.forEach((product) =>
//     productList.append(createProduct(product))
//   );

//   if (!priceRangeValue && !categoryFilterValue && !ratingRangeValue) {
//     productList.textContent = "";
//     allProducts.forEach((product) =>
//       productList.append(createProduct(product))
//     );
//   }
//   console.log(allProducts);
//   console.log(filteredProducts);
//   console.log("prezzo ", priceRangeValue);
//   console.log("categoria ", categoryFilterValue);
//   console.log("stelle ", ratingRangeValue);
// });
