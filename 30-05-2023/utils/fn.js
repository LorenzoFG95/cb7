export const cE = (type) => document.createElement(type);

export const tweetGen = (tweetData, userList) => {
  const postUser = userList.filter((user) => user.id === tweetData.userId);
  const wrapperEl = cE("div");
  const userImageEl = cE("img");
  const contentEl = cE("div");
  const userInfo = cE("div");
  const nameEl = cE("span");
  const userNameEl = cE("span");
  const textContentEl = cE("p");
  const reactionsEl = cE("p");
  const postId = tweetData.id;
  let reactionsCounter = localStorage.getItem(postId) || tweetData.reactions;
  const imagePlaceholder =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  wrapperEl.className = "tweet";
  userImageEl.src = postUser[0]?.image || imagePlaceholder;
  userImageEl.alt = postUser[0]?.username;
  contentEl.className = "tweet__content";
  nameEl.className = "tweet__name";
  userNameEl.className = "tweet__username";

  nameEl.textContent = postUser[0]?.firstName || "Utente Anonimo";
  userNameEl.textContent = ` @${postUser[0]?.username || "UserTest"}`;
  textContentEl.textContent = tweetData.body;
  reactionsEl.textContent = `💕 ${reactionsCounter}`;

  reactionsEl.className = "reactions";
  reactionsEl.addEventListener("click", (e) => {
    reactionsEl.textContent = "";
    reactionsCounter = ++reactionsCounter;
    localStorage.setItem(postId, `${reactionsCounter}`);
    reactionsEl.textContent = `💕 ${reactionsCounter}`;
  });

  userInfo.append(nameEl, userNameEl);
  contentEl.append(userInfo, textContentEl, reactionsEl);
  wrapperEl.append(userImageEl, contentEl);

  return wrapperEl;
};
