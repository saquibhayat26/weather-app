import React from "react";
import "./Home.css";

import WeatherForm from "../components/WeatherForm";
import WeatherMap from "../components/WeatherMap";

function Home() {
  return (
    <div className="wrapper">
      <div className="left">
        <p>my weather</p>
        <WeatherMap />
      </div>
      <div className="right">
        <WeatherForm />
      </div>
    </div>
  );
}

export default Home;
