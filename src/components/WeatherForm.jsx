import React from "react";

// import * as dotenv from "dotenv";
// dotenv.config();

import SearchIcon from "@mui/icons-material/Search";
import "./WeatherForm.css";
import WeatherDetails from "./WeatherDetails";

import { useState, useEffect } from "react";

// const MY_KEY = process.env.API_KEY;

function WeatherForm() {
  const [cityData, setCityData] = useState(null);
  const [citySearch, setCitySearch] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const city = e.target.innerText;
    const result = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QrJ2LISfygigSQA3D1pEXnsv58dDYtIT&q=${
        city !== undefined ? city : citySearch
      }`
    ).then((result) => result.json());

    setCityData(result[0]);
    setCitySearch("");
  };

  // const handleLocation = async (e) => {
  //   const cityName = e.target.innerText;
  //   setCity(cityName);
  // };

  return (
    <div className="main__wrapper">
      <div className="top">
        <div className="input__container">
          <input
            required
            value={citySearch}
            className="input"
            placeholder="add location"
            onChange={(e) => setCitySearch(e.target.value)}
          />
          <div className="icon__container" onClick={handleClick}>
            <SearchIcon className="icon" />
          </div>
        </div>
        <div className="selectLocation">
          <p onClick={(e) => handleClick(e)}>New Delhi</p>
          <p onClick={(e) => handleClick(e)}>Kolkata</p>
          <p onClick={(e) => handleClick(e)}>Mumbai</p>
          <p onClick={(e) => handleClick(e)}>Bangalore</p>
        </div>
        <hr />
      </div>
      <div className="bottom">
        {cityData && <WeatherDetails cityData={cityData} />}
      </div>
    </div>
  );
}

export default WeatherForm;
