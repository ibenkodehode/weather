import { useState, useEffect } from "react";

const FetchWeather = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "9f58b3473650597ed51ffb988e8eac5d";
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          props.searchCity +
          "&units=metric&appid=" +
          apiKey
      );
      if (!response.ok) {
        setError(new Error(`Error ${response.status}: ${response.statusText}`));
      } else {
        const data = await response.json();
        setData(data);
        console.log(props.searchCity);
      }
    };
    fetchData();
  }, [props.searchCity]);

  if (error) {
    return <p className="font-sans text-red-500">{error.message}</p>;
  }

  if (!data) {
    return <p>Checking weather...</p>;
  }

  const { name, weather, main, wind } = data;
  const { icon, description } = weather[0];
  const { temp, humidity } = main;
  const { speed } = wind;

  return (
    <div id="weather">
      <h3>Weather in {name}</h3>
      <h2>{temp}°C</h2>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
      <div>It is {description}</div>
      <div>Humidity: {humidity}%</div>
      <div>Wind speed: {speed} km/h</div>
    </div>
  );
};

export default FetchWeather;
