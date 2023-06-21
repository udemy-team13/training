const API_KEY = "5eae5aa121d2a763f86a90d571f5f448";
const weather = document.querySelector(".weather");

(function location() {
  navigator.geolocation.getCurrentPosition((position) => {
    fetchWeather(position.coords.latitude, position.coords.longitude);
  }, handleGeoError);
})();

function handleGeoError() {
  console.log("ERROR~~");
}

async function fetchWeather(lat, lng) {
  try {
    const data = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
      )
    ).json();
    console.log(data.weather[0].icon);
    weather.innerText = `${data.weather[0].main} : ${data?.main.temp} / 현재위치 : ${data?.name}`;
  } catch (err) {
    console.log(err);
    alert("error");
  }
}
