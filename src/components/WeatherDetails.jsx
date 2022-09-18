import React from "react";

function WeatherDetails() {
  return (
    <div className="wrap">
      <p>Weather Details</p>
      <div className="wrap__top">
        <p>Cloudy</p>
        <p>86%</p>
      </div>
      <div className="wrap__center">
        <p>Humidity</p>
        <p>66%</p>
      </div>
      <div className="wrap__bottom">
        <p>Wind</p>
        <p>8 km/h</p>
      </div>
      <hr />
    </div>
  );
}

export default WeatherDetails;
