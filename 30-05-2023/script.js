//Implementata la visualizzazione dei post con metodo alternativo che non prevede la manipolazione degli oggetti.
//Aggiunta la funzione For You/Following che permette di filtrare i post (ho scelto arbitrariamente tre account seguiti).
//Aggiunta la funzione di mettere like che aumenta di uno il contatore dei cuori.
//Il nuovo numero di likes viene conservato nel local storage e viene mantenuto al refresh.

import { cE, tweetGen } from "./utils/fn.js";
import { GET } from "./utils/http.js";
const navItems = document.querySelectorAll(".navItem");
const contentHeaderItem = document.querySelectorAll(".contentHeaderItem");

let userList = [];
let postList = [];

const contentEl = document.querySelector(".content");
const contentWrapperEl = cE("div");
contentEl.append(contentWrapperEl);
const remoteData = Promise.all([GET("/posts"), GET("/users")]);

//async
remoteData
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() =>
    postList.forEach((post) =>
      contentWrapperEl.append(tweetGen(post, userList))
    )
  );

//events
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  });
});

contentHeaderItem.forEach((element) => {
  element.addEventListener("click", () => {
    contentHeaderItem.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");

    contentWrapperEl.textContent = "";
    if (element.textContent === "For You") {
      remoteData
        .then((data) => {
          postList = data[0].posts;
          userList = data[1].users;
        })
        .then(() =>
          postList.forEach((post) =>
            contentWrapperEl.append(tweetGen(post, userList))
          )
        );
    } else if (element.textContent === "Following") {
      remoteData
        .then((data) => {
          postList = data[0].posts;
          userList = data[1].users;
        })
        .then(() => {
          const postsByFollowed = postList.filter(
            (post) =>
              post.userId === 1 || post.userId === 12 || post.userId === 27
          );
          postsByFollowed.forEach((post) =>
            contentWrapperEl.append(tweetGen(post, userList))
          );
        });
    }
  });
});
