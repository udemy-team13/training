import { useState } from "react";
import { useEffect } from "react";

const WEATHER_KEY = "5eae5aa121d2a763f86a90d571f5f448";

export default function Weather() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetchWeather(position.coords.latitude, position.coords.longitude);
    });

    const fetchWeather = async (lat, lng) => {
      const data = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`
        )
      ).json();
      setWeather(data);
    };
  }, [weather]);

  return (
    <div>
      {weather?.weather[0].main} / {weather?.main.temp}
    </div>
  );
}
