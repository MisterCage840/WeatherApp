import "./style.css";
import { getWeatherData } from "./fetchWeather.js";
import { getTodaysWeather } from "./todaysWeather.js";
import { getForecastWeather } from "./forecastWeather.js";

// import anime from "animejs/lib/anime.es.js";

const locationInput = document.getElementById("location");
const submitBtn = document.querySelector("button");
const weatherContainer = document.querySelector(".weatherContainer");
const forecastWeatherContainer = document.querySelector(".forecastWeatherContainer");
let programLocation;
const visualToggle = document.getElementById("visual-toggle");
const degreeText = document.querySelector(".degreeText");
const p = document.querySelector("p");
async function displayWeather(location) {
  try {
    const mainWeatherArray = await getWeatherData(location);
    return mainWeatherArray;
  } catch (error) {
    return error;
  }
}
function toggleCelsius(number) {
  let celsius = (number - 32) * (5 / 9);
  return celsius;
}
submitBtn.addEventListener("click", async function (event) {
  programLocation = locationInput.value;
  weatherContainer.textContent = "";
  forecastWeatherContainer.textContent = "";
  let location = locationInput.value;
  event.preventDefault();
  let arr = await getWeatherData(location);
  arr = arr.splice(0, 7);
  console.log(arr);
  arr[0].windspeed += " m/h";
  weatherContainer.appendChild(getTodaysWeather(arr));
  weatherContainer.appendChild(getForecastWeather(arr));
  console.log(getWeatherData(location));
});
visualToggle.addEventListener("change", async function toggleDegree() {
  if (visualToggle.checked) {
    console.log("Toggle is ON");
    degreeText.textContent = "Metric";
    if (programLocation) {
      weatherContainer.textContent = "";
      forecastWeatherContainer.textContent = "";
      let arr = await getWeatherData(programLocation);
      arr = arr.splice(0, 7);
      arr[0].windspeed = Math.round(arr[0].windspeed * 1.609 * 100) / 100 + " km/hr";
      for (let i = 0; i < arr.length; i++) {
        arr[i].temp = Math.round(toggleCelsius(arr[i].temp)) * 100 / 100;
        arr[i].maxtemp = Math.round(toggleCelsius(arr[i].maxtemp) * 100) / 100;
        arr[i].mintemp = Math.round(toggleCelsius(arr[i].mintemp) * 100) / 100;
        arr[i].feelslike = Math.round(toggleCelsius(arr[i].feelslike) * 100) / 100;
      }
      weatherContainer.appendChild(getTodaysWeather(arr));
      weatherContainer.appendChild(getForecastWeather(arr));
    }
  } else {
    console.log("Toggle is OFF");
    degreeText.textContent = "Imperial";
    if (programLocation) {
      weatherContainer.textContent = "";
      forecastWeatherContainer.textContent = "";
      let arr = await getWeatherData(programLocation);
      arr = arr.splice(0, 7);
      console.log(arr);
      arr[0].windspeed += " m/h";
      weatherContainer.appendChild(getTodaysWeather(arr));
      weatherContainer.appendChild(getForecastWeather(arr));
      console.log(getWeatherData(location));
    }
  }
});