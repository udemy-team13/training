const weather = document.getElementById("weather");
const API_KEY = "15f8fbf5168d6da001f1e3c2c4b76277";

function getWeather(lat, lon) {
  console.log(lat, lon);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      const temp = json.main.temp;
      const name = json.name;
      weather.innerText = `${temp}° @ ${name}`;
    });
}

function success(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeather(latitude, longitude);
}

function error() {
  console.log("error!");
}

function init() {
  navigator.geolocation.getCurrentPosition(success, error);
}
init();
