const FetchWeather = (props) => {
  const { name, weather, main, wind } = props.data;
  const { icon, description } = weather[0];
  const { temp, humidity, feels_like } = main;
  const { speed } = wind;

  return (
    <div id="weather" className="bg-white rounded shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-800">Weather in {name}</h3>
      <h2 className="text-4xl font-bold text-blue-500">{temp}°C</h2>
      <h4>It feels like {feels_like}°C</h4>
      <div className="text-gray-600 font-semibold">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          className="mx-auto mb-4"
          alt={description}
        />
        {description}
      </div>
      <div className="text-gray-600 font-semibold">Humidity: {humidity}%</div>
      <div className="text-gray-600 font-semibold">
        Wind speed: {speed} km/h
      </div>
    </div>
  );
};

export default FetchWeather;
