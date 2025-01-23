import rainy from "./rainy.png";
import cloudy from "./cloudy.png";
import snowy from "./snowy.png";
import windy from "./windy.png";
import partlycloudy from "./partlycloudy.png";
import sunny from "./sunny.png";

const forecastWeatherContainer = document.querySelector(
  ".forecastWeatherContainer",
);
function getForecastWeather(weatherArray) {
  for (let i = 1; i < weatherArray.length; i++) {
    console.log(weatherArray.length);
    let forecastDay = weatherArray[i];
    let forecastDate = forecastDay.date;
    let forecastMaxTemp = forecastDay.maxtemp;
    let forecastMinTemp = forecastDay.mintemp;

    const forecastContainer = document.createElement("div");
    const DateContainer = document.createElement("div");
    const iconContainer = document.createElement("div");
    const maxTempContainer = document.createElement("div");
    const minTempContainer = document.createElement("div");

    const date = document.createElement("p");
    const icon = document.createElement("img");
    const maxTemp = document.createElement("p");
    const minTemp = document.createElement("p");

    const dateText = document.createTextNode(forecastDate);
    date.appendChild(dateText);
    DateContainer.appendChild(date);
    DateContainer.classList.add("todaysWeatherInfo");
    // DateContainer.classList.add("");

    switch (forecastDay.icon) {
      case "rain":
        icon.src = rainy;
        break;
      case "cloudy":
        icon.src = cloudy;
        break;
      case "snow":
        icon.src = snowy;
        break;
      case "fog":
        icon.src = cloudy;
        break;
      case "wind":
        icon.src = windy;
        break;
      case "partly-cloudy-day":
        icon.src = partlycloudy;
        break;
      case "partly-cloudy-night":
        icon.src = partlycloudy;
        break;
      case "clear-day":
        icon.src = sunny;
        break;
      case "clear-night":
        icon.src = sunny;
        break;
    }
    icon.classList.add("icon");
    iconContainer.appendChild(icon);
    iconContainer.classList.add("iconContainer");

    const maxTempText = document.createTextNode("Max Temp: " + forecastMaxTemp);
    maxTemp.appendChild(maxTempText);
    maxTempContainer.appendChild(maxTemp);
    maxTempContainer.classList.add("todaysWeatherInfo");
    maxTempContainer.classList.add("maxTempContainer");

    const minTempText = document.createTextNode("Min Temp: " + forecastMinTemp);
    minTemp.appendChild(minTempText);
    minTempContainer.appendChild(minTemp);
    minTempContainer.classList.add("todaysWeatherInfo");
    minTempContainer.classList.add("minTempContainer");

    forecastContainer.appendChild(DateContainer);
    forecastContainer.appendChild(iconContainer);
    forecastContainer.appendChild(maxTempContainer);
    forecastContainer.appendChild(minTempContainer);
    forecastContainer.classList.add("forecastContainer");
    forecastWeatherContainer.appendChild(forecastContainer);
  }
  return forecastWeatherContainer;
}

export { getForecastWeather };
