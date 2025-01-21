async function getWeatherData(location) {
  try {
    const weatherArray = [];
    const weatherData = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "?key=KCDAE4WY4U4YUHLNXGVFF4EKY",
      { mode: "cors" },
    );
    const weatherJson = await weatherData.json();

    weatherJson.days.forEach((day) => {
      const weatherFinal = {
        date: day.datetime,
        temp: day.temp,
        mintemp: day.tempmin,
        maxtemp: day.tempmax,
        feelslike: day.feelslike,
        humidity: day.humidity,
        icon: day.icon,
        windspeed: day.windspeed,
        winddir: day.winddir,
      };
      weatherArray.push(weatherFinal);
    });
    return weatherArray;
  } catch (error) {
    return error;
  }
}

export { getWeatherData };
