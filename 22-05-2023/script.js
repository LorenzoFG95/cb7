const getWeatherCityData = async (city) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=9fc8a13d449f4fc291f124722232205&q=${city}`
  );
  const data = await res.json();
  return data;
};

const bodyEl = document.querySelector("body");
const cityNameEl = document.querySelector(".cityForm");
const temperatureEl = document.querySelector(".temperature");

const weatherConditions = [
  {
    id: 1,
    name: "sunny",
    url: "https://cdn2.hubspot.net/hubfs/2936356/maxresdefault.jpg",
  },
  {
    id: 2,
    name: "Patchy light rain with thunder",
    url: "https://www.cambridgeindependent.co.uk/_media/img/E18FG1PI43Q6YRRKVQXE.jpg",
  },
  {
    id: 3,
    name: "Partly cloudy",
    url: "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1469481278849-MO7RU58JUGPE4KSM67XX/pc_head.jpg?format=2500w",
  },
  {
    id: 4,
    name: "Patchy rain possible",
    url: "https://resources.stuff.co.nz/content/dam/images/4/y/q/e/h/g/image.related.StuffLandscapeSixteenByNine.710x400.21xog1.png/1612823226133.jpg?format=pjpg&optimize=medium",
  },
  {
    id: 5,
    name: "Moderate or heavy rain with thunder",
    url: "https://static.india.com/wp-content/uploads/2023/03/mumbai-weather.jpg",
  },
];

cityNameEl.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherCityData(e.srcElement[0].value).then((data) => {
    const conditionImage = weatherConditions.find(
      (cond) =>
        cond.name.toLowerCase() === data.current.condition.text.toLowerCase()
    ).url;

    bodyEl.style.backgroundImage = `url(${conditionImage})`;
    temperatureEl.textContent = data.current.temp_c + "°";
  });
});
