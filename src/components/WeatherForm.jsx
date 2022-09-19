import React from "react";

// import * as dotenv from "dotenv";
// dotenv.config();

import SearchIcon from "@mui/icons-material/Search";
import "./WeatherForm.css";
import WeatherDetails from "./WeatherDetails";

import { useState, useEffect } from "react";

// const MY_KEY = process.env.API_KEY;

function WeatherForm({ setHomeData }) {
  const [cityData, setCityData] = useState(null);
  const [citySearch, setCitySearch] = useState("");

  useEffect(() => {
    setHomeData(cityData);
  });

  const handleClick = async (e) => {
    e.preventDefault();
    const value = e.target.innerText;
    const city = value !== undefined ? value : citySearch;
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=9giJQ3SwGPCQTEYYoBH3YLQot5x30QHE&q=${city}`;
    var headers = {};

    await fetch(url, {
      method: "GET",
      // mode: "cors",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.error);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCityData(data[0]);
        setHomeData(cityData);
        setCitySearch("");
      })
      .catch(function (error) {
        console.log(error.message);
      });

    // const result = await fetch(
    //   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QrJ2LISfygigSQA3D1pEXnsv58dDYtIT&q=${
    //     city !== undefined ? city : citySearch
    //   }`
    // ).then((result) => result.json());
    // console.log(result);
    // setCityData(result[0]);
    // setHomeData(cityData);
    // setCitySearch("");
  };

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
