import { useState } from "react";
import DisplayWeather from "./Weather";
import sun from "../assets/img/few_clouds.png";

function Search() {
  const [searchCity, setSearchCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (searchCity) => {
    const apiKey = "9f58b3473650597ed51ffb988e8eac5d";
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          searchCity +
          "&units=metric&appid=" +
          apiKey
      );
      if (!response.ok) {
        console.error("response not ok", response);
        setError(response.statusText);
      } else {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setError(null);
    setSearchCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData(null);
    fetchData(searchCity);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <img src={sun} alt="sun behind a cloud" />
        <div className="relative flex flex-wrap items-stretch m-3">
          <label className="sr-only" htmlFor="search">
            Search city:
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search city..."
            value={searchCity}
            onChange={handleChange}
            className="placeholder:italic flex-1 block w-full px-3 py-1.5 text-base font-normal bg-blue-50 bg-clip-padding rounded-l-lg transition ease-in-out placeholder-gray-400 focus:text-sky-900 focus:bg-blue-50 focus:outline-none focus:placeholder-gray-300"
          />
          <button
            type="submit"
            className="inline-block px-3 py-1.5  bg-blue-50 rounded-r-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-2 w-6 h-6 stroke-gray-400 hover:stroke-blue-400 focus:scale-125;">
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </form>
      <section>
        {data && <DisplayWeather data={data} />}
        {error && <p className="font-sans text-red-500">{error}</p>}
      </section>
    </>
  );
}

export default Search;
