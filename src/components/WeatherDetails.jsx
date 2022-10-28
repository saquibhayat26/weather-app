import React, { useEffect, useState } from "react";
import "./WeatherDetails.css";

function WeatherDetails({ cityData }) {
  const [data, setData] = useState("");
  useEffect(() => {
    getCurrentCityData();
  }, [cityData.Key]);

  const getCurrentCityData = async () => {
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=9giJQ3SwGPCQTEYYoBH3YLQot5x30QHE`;
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
        setData(data[0]);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div className="mainWrap">
      <p>Geo Position Details</p>
      <div className="wrap">
        <p>Location</p>
        <p>
          {cityData.AdministrativeArea.EnglishName},
          {cityData.AdministrativeArea.CountryID}
        </p>
      </div>
      <div className="wrap">
        <p>Mean Sea Level</p>
        <p>{cityData.GeoPosition.Elevation.Imperial.Value} ft</p>
      </div>
      <div className="wrap">
        <p>Latitude</p>
        <p>{cityData.GeoPosition.Latitude}</p>
      </div>
      <div className="wrap">
        <p>Longitude</p>
        <p>{cityData.GeoPosition.Longitude}</p>
      </div>
      <hr />
    </div>
  );
}

export default WeatherDetails;
