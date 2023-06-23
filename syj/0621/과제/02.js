const weather = document.querySelector('#weather');
const API_KEY = '';


//.lat, long, api key로 데이터를 요청한다
function getWeather(lat, long) {
  console.log(lat, long);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //. 가져온 값을 화면에 뿌려준다
      console.log(json.weather.main)
      const weath = json.weather[0].main;
      const temp = json.main.temp;
      weather.innerText = `${weath} ${temp}℃`;
    })
}


//. 1. 브라우저를 통해 lat, lon(위도 경도) 값을 가져온다
function handleGeoSuccess(pos) {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  getWeather(latitude, longitude);
  console.log('latitude', latitude);
  console.log('longitude', longitude);
}

function handleGeoError() {
  console.log('error!');
}

//: 현재 위치 가져오기
function init() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

init();