import React from "react";
import "./WeatherMap.css";

function WeatherMap() {
  return (
    <div className="mainContainer">
      <div className="temp">
        <p>24 C</p>
      </div>
      <div className="location">
        <p className="locationName">Patna</p>
        <p className="date">Monday 28-12-2022</p>
      </div>
      <div className="weatherType">
        <p>cloudy</p>
      </div>
    </div>
  );
}

export default WeatherMap;
