import "./style.css";
import { getWeatherData } from "./fetchWeather.js";
import { getTodaysWeather } from "./todaysWeather.js";

import anime from "animejs/lib/anime.es.js";

const locationInput = document.getElementById("location");
const submitBtn = document.querySelector("button");
const weatherContainer = document.querySelector(".weatherContainer");
const p = document.querySelector("p");

async function displayWeather(location) {
  try {
    const mainWeatherArray = await getWeatherData(location);
    return mainWeatherArray;
  } catch (error) {
    return error;
  }
}

submitBtn.addEventListener("click", async function (event) {
  weatherContainer.textContent = "";
  let location = locationInput.value;
  event.preventDefault();
  const arr = await getWeatherData(location);
  weatherContainer.appendChild(getTodaysWeather(arr));
  console.log(getWeatherData(location));

  // const arr = await displayWeather(location);
  // const smallerarr = arr.slice(0, 7);
  // smallerarr.forEach((day) => console.log(day));
  // p.textContent = "";
  // locationWeather.appendChild(p);
});
