import React, { useState, useEffect } from "react";

import Moment from "react-moment";
import "./WeatherMap.css";

function WeatherMap({ currentCityData }) {
  const [data, setData] = useState("");

  useEffect(() => {
    getCurrentCityData();
  }, [currentCityData]);

  const getCurrentCityData = async () => {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${currentCityData.Key}?apikey=9giJQ3SwGPCQTEYYoBH3YLQot5x30QHE`;
    var headers = {};

    await fetch(url, {
      method: "GET",
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
        setData(data[0]);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div className="mainContainer">
      <div className="temp">
        <p>{data.Temperature?.Metric.Value} &deg;C</p>
      </div>
      <div className="location">
        <p className="locationName">{currentCityData.LocalizedName}</p>
        <p className="date">
          <Moment>{data?.LocalObservationDateTime}</Moment>
        </p>
      </div>
      <div className="weatherType">
        <p>({data?.WeatherText})</p>
      </div>
    </div>
  );
}

export default WeatherMap;
