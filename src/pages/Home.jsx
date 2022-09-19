import React, { useState } from "react";
import "./Home.css";

import WeatherForm from "../components/WeatherForm";
import WeatherMap from "../components/WeatherMap";
import { InfinitySpin } from "react-loader-spinner";

function Home() {
  const [homeData, setHomeData] = useState(null);
  console.log(homeData);

  return (
    <div className="wrapper">
      <div className="left">
        <p>my weather</p>
        {homeData ? (
          <WeatherMap currentCityData={homeData} />
        ) : (
          <div className="loading">
            <InfinitySpin width="200" color="#ffee00" />
            <p>please select location first</p>
          </div>
        )}
      </div>
      <div className="right">
        <WeatherForm setHomeData={setHomeData} />
      </div>
    </div>
  );
}

export default Home;
