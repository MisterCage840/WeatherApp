import "./style.css";
import { getWeatherData } from "./fetchWeather.js";
import { getTodaysWeather } from "./todaysWeather.js";
import rainy from "./rainy.png";
import cloudy from "./cloudy.png";
import snowy from "./snowy.png";
import windy from "./windy.png";
import partlycloudy from "./partlycloudy.png";
import sunny from "./sunny.png";
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
  event.preventDefault();
  const arr = await getWeatherData("manila");
  weatherContainer.appendChild(getTodaysWeather(arr));
  console.log(getWeatherData("manila"));

  // let location = locationInput.value;
  // const arr = await displayWeather(location);
  // const smallerarr = arr.slice(0, 7);
  // smallerarr.forEach((day) => console.log(day));
  // p.textContent = "";
  // locationWeather.appendChild(p);
});
export { rainy, sunny, cloudy, snowy, windy, partlycloudy };