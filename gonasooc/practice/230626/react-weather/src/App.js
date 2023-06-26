import './App.css';
import { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState('');
  const API_KEY = '716b32cd762e891cc58d9d4e35c0d057'; // my key

  function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const name = json.name;
        const temp = json.main.temp.toFixed(0);
        const humidity = json.main.humidity;
        // const obj = JSON.parse(json);
        // console.log(obj);
        setWeather(`${name}/${temp}@${humidity}`)
      })
  }

  function handleGeoSuccess(pos) { // geo정보 가져와서 날씨정보 함수 실행
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    getWeather(latitude, longitude);
  }

  function handleGeoError() {
    console.log('error!');
  }

  function init() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div style={{'fontSize': '30px'}}>{ weather }</div>
  )
}

function App() {
  return (
    <div>
      <Weather />
    </div>
  );
}

export default App;
