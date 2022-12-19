import { useState } from "react";
import FetchWeather from "./FetchWeather";

function Search() {
  const [searchCity, setSearchCity] = useState("");

  const handleChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search city: ${searchCity}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="search">
        Search city:
      </label>
      <input
        type="text"
        id="search"
        placeholder="Enter city"
        value={searchCity}
        onChange={handleChange}
        className=" placeholder:italic flex-1 block w-full px-3 py-1.5 text-base font-normal bg-blue-50 bg-clip-padding rounded-l-lg transition ease-in-out placeholder-gray-400 focus:text-sky-900 focus:bg-blue-50 focus:outline-none focus:placeholder-gray-300"
      />
      <button
        type="submit"
        className="inline-block px-3 py-1.5 bg-blue-400 rounded-r-lg hover:shadow-lg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-2 w-6 h-6 stroke-blue-50 hover:stroke-slate-50 focus:scale-125;">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <FetchWeather searchCity={searchCity} />
    </form>
  );
}

export default Search;
