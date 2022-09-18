import React from "react";
import "./WeatherDetails.css";
function WeatherDetails() {
  return (
    <div className="mainWrap">
      <p>Weather Details</p>
      <div className="wrap">
        <p>Cloudy</p>
        <p>86%</p>
      </div>
      <div className="wrap">
        <p>Humidity</p>
        <p>66%</p>
      </div>
      <div className="wrap">
        <p>Wind</p>
        <p>8 km/h</p>
      </div>
      <hr />
    </div>
  );
}

export default WeatherDetails;
