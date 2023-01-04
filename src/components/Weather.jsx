// Icons
import { TbWind } from "react-icons/tb";
import { TbDroplet } from "react-icons/tb";
import { TbPercentage } from "react-icons/tb";

const DisplayWeather = (props) => {
  const { name, weather, main, wind } = props.data;
  const { icon, description } = weather[0];
  const { temp, humidity, feels_like } = main;
  const { speed } = wind;

  return (
    <div
      id="weather"
      className="flex flex-col items-center my-6 	box-sizing: border-box">
      <h3 className="font-mono text-l font-bold text-slate-200">{name}</h3>
      <h2 className=" text-4xl font-bold text-white">{temp}°C</h2>
      <h6 className="text-blue-200 font-light text-sm">
        Feels like {feels_like}°C
      </h6>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        className="mt-4 mb-2"
        alt={description}
      />
      <h4 className="text-blue-100 font-semibold text-sm">{description}</h4>
      <hr className="mt-2 mb-4 w-48 h-px bg-slate-300 rounded border-0 "></hr>
      <section className="grid grid-cols-2 gap-x-8 text-sm font-normal text-slate-200 justify-items-center">
        <TbDroplet className="text-2xl mr-1.5" />
        <TbWind className="mr-1.5 text-2xl" />
        <h5 className="flex flex-row items-center ">{humidity} %</h5>
        <h5 className=""> {speed} m/s</h5>
      </section>
    </div>
  );
};

export default DisplayWeather;
