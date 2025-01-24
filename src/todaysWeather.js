import rainy from "./rainy.png";
import cloudy from "./cloudy.png";
import snowy from "./snowy.png";
import windy from "./windy.png";
import partlycloudy from "./partlycloudy.png";
import sunny from "./sunny.png";
import up from "./up.png";
import down from "./down.png";

function getWindDirection(winddir) {
  if (winddir == 0) return "North";
  else if (winddir > 0 && winddir < 90) return "North East";
  else if (winddir == 90) return "East";
  else if (winddir > 90 && winddir < 180) return "South East";
  else if (winddir == 180) return "South";
  else if (winddir > 180 && winddir < 270) return "South West";
  else if (winddir == 270) return "West";
  else if (winddir > 270 && winddir < 360) return "North West";
}

function getTodaysWeather(weatherArray) {
  const todaysWeatherDiv = document.createElement("div");
  const iconContainer = document.createElement("div");
  const tempContainer = document.createElement("div");
  const humidityContainer = document.createElement("div");
  const feelsLikeContainer = document.createElement("div");
  const windSpeedContainer = document.createElement("div");
  const windDirectionContainer = document.createElement("div");
  const maxTempContainer = document.createElement("div");
  const minTempContainer = document.createElement("div");

  const icon = document.createElement("img");
  const temp = document.createElement("p");
  const humidity = document.createElement("p");
  const feelsLike = document.createElement("p");
  const windSpeed = document.createElement("p");
  const windDirection = document.createElement("p");
  const maxTemp = document.createElement("p");
  const minTemp = document.createElement("p");
  todaysWeatherDiv.classList.add("todaysWeatherDiv");

  let today = weatherArray[0]; //current day
  let todaysTemp = today.temp;
  let todaysHumidity = today.humidity;
  let todaysFeelsLike = today.feelslike;
  let todaysWindspeed = today.windspeed;
  let todaysWindDirection = today.winddir;
  let todaysMaxTemp = today.maxtemp;
  let todaysMinTemp = today.mintemp;

  switch (today.icon) {
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

  const tempText = document.createTextNode("Temp: " + todaysTemp);
  temp.appendChild(tempText);
  tempContainer.appendChild(temp);
  tempContainer.classList.add("todaysWeatherInfo");

  const humidityText = document.createTextNode(
    "Humidity: " + todaysHumidity + "%",
  );
  humidity.appendChild(humidityText);
  humidityContainer.appendChild(humidity);
  humidityContainer.classList.add("todaysWeatherInfo");

  const feelsLikeText = document.createTextNode(
    "Feels Like: " + todaysFeelsLike,
  );
  feelsLike.appendChild(feelsLikeText);
  feelsLikeContainer.appendChild(feelsLike);
  feelsLikeContainer.classList.add("todaysWeatherInfo");
  feelsLikeContainer.classList.add("rightPartTodaysWeather");

  const windSpeedText = document.createTextNode(
    "Wind Speed: " + todaysWindspeed,
  );
  windSpeed.appendChild(windSpeedText);
  windSpeedContainer.appendChild(windSpeed);
  windSpeedContainer.classList.add("todaysWeatherInfo");
  windSpeedContainer.classList.add("rightPartTodaysWeather");

  const windDirectionText = document.createTextNode(
    "Wind Direction: " + getWindDirection(todaysWindDirection),
  );
  windDirection.appendChild(windDirectionText);
  windDirectionContainer.appendChild(windDirection);
  windDirectionContainer.classList.add("todaysWeatherInfo");
  windDirectionContainer.classList.add("rightPartTodaysWeather");

  const maxTempText = document.createTextNode("Max Temp: " + todaysMaxTemp);
  maxTemp.appendChild(maxTempText);
  maxTempContainer.appendChild(maxTemp);
  maxTempContainer.classList.add("todaysWeatherInfo");
  maxTempContainer.classList.add("maxTempContainer");

  const minTempText = document.createTextNode("Min Temp: " + todaysMinTemp);
  minTemp.appendChild(minTempText);
  minTempContainer.appendChild(minTemp);
  minTempContainer.classList.add("todaysWeatherInfo");
  minTempContainer.classList.add("minTempContainer");

  todaysWeatherDiv.appendChild(iconContainer);
  todaysWeatherDiv.appendChild(tempContainer);
  todaysWeatherDiv.appendChild(humidityContainer);
  todaysWeatherDiv.appendChild(feelsLikeContainer);
  todaysWeatherDiv.appendChild(windSpeedContainer);
  todaysWeatherDiv.appendChild(windDirectionContainer);
  todaysWeatherDiv.appendChild(maxTempContainer);
  todaysWeatherDiv.appendChild(minTempContainer);
  return todaysWeatherDiv;
}

export { getTodaysWeather };
