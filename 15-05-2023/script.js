import { cE, qS, createProduct } from "./utils/fn.js";

const rootEl = qS("#root");
const productList = cE("div");

productList.className = "productList";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    )
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
