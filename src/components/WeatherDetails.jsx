import React, { useEffect, useState } from "react";
import "./WeatherDetails.css";

function WeatherDetails({ cityData }) {
  const [data, setData] = useState("");
  // console.log(setHomeData);
  useEffect(() => {
    getCurrentCityData();
  }, [cityData.Key]);

  const getCurrentCityData = async () => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=9giJQ3SwGPCQTEYYoBH3YLQot5x30QHE`;
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

    // const result = await fetch(
    //   `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=QrJ2LISfygigSQA3D1pEXnsv58dDYtIT`
    // ).then((response) => response.json());
    // setData(result[0]);
    // console.log(result);
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
