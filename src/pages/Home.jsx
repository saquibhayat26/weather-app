import React from "react";
import "./Home.css";

// import { useState, useEffect } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherMap from "../components/WeatherMap";

function Home() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   // try{
  //   const response = await fetch(
  //     "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QrJ2LISfygigSQA3D1pEXnsv58dDYtIT&q=patna"
  //   );
  //   const result = response.json();
  //   // setData(result[0]);
  //   console.log(result);
  //   // }catch(){}
  // };

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
