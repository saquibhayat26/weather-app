import React, { useState, useEffect } from "react";
import "./WeatherMap.css";

function WeatherMap({ currentCityData }) {
  const [data, setData] = useState("");
  console.log(currentCityData);
  useEffect(() => {
    getCurrentCityData();
  }, [currentCityData.Key]);

  const getCurrentCityData = async () => {
    const result = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${currentCityData.Key}?apikey=QrJ2LISfygigSQA3D1pEXnsv58dDYtIT`
    ).then((response) => response.json());
    setData(result[0]);
  };

  return (
    <div className="mainContainer">
      <div className="temp">
        <p>{data.Temperature?.Metric.Value} &deg;C</p>
      </div>
      <div className="location">
        <p className="locationName">
          {currentCityData.AdministrativeArea.EnglishName}
        </p>
        <p className="date">Monday 28-12-2022</p>
      </div>
      <div className="weatherType">
        <p>{data?.WeatherText}</p>
      </div>
    </div>
  );
}

export default WeatherMap;
