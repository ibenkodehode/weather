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
    <div id="weather" className="flex flex-col items-center my-6">
      <h3 className="font-mono text-l font-bold text-slate-200">{name}</h3>
      <h2 className=" text-4xl font-bold text-white">{temp}°C</h2>
      <h6 className="text-blue-200 font-light text-sm">
        Feels like {feels_like}°C
      </h6>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        className="mx-auto"
        alt={description}
      />
      {/* <h4 className="text-blue-200 font-semibold text-sm">{description}</h4> */}
      <hr className="mt-6 mb-2 mx-auto w-48 h-px bg-slate-400 rounded border-0 "></hr>
      <section className="flex flex-row content-between text-sm font-normal ">
        <h5 className="text-slate-300 flex-col items-center">
          <TbDroplet className="text-2xl mr-1.5" />
          {humidity}
          <TbPercentage />
        </h5>
        <h5 className="text-slate-300 flex-col items-center">
          <TbWind className="mr-1.5 text-2xl" /> {speed} m/s
        </h5>
      </section>
    </div>
  );
};

export default DisplayWeather;
