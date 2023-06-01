import { cE, tweetGen, friendItemEl, onHandleTweet } from "./utils/fn.js";
import { GET } from "./utils/http.js";
const navItems = document.querySelectorAll(".navItem");
const contentHeaderItem = document.querySelectorAll(".contentHeaderItem");
const followFriendsListEl = document.querySelector(".followFriendsList");
const tweetBarContentEl = document.querySelector(".tweetBar__content");

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
  )
  .then(() => {
    userList.map((user) => {
      if (user.id <= 10) {
        followFriendsListEl.append(friendItemEl(user));
      }
    });
  });

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

tweetBarContentEl.addEventListener("submit", onHandleTweet);
