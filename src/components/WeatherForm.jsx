import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./WeatherForm.css";
import WeatherDetails from "./WeatherDetails";

function WeatherForm() {
  return (
    <div className="main__wrapper">
      <form action="" className="top">
        <div className="input__container">
          <input className="input" placeholder="add location" />
          <div className="icon__container">
            <SearchIcon className="icon" />
          </div>
        </div>
        <table>
          <tr>New Delhi</tr>
          <tr>Kolkata</tr>
          <tr>Mumbai</tr>
          <tr>Banglore</tr>
        </table>
        <hr />
      </form>
      <div className="bottom">
        <WeatherDetails />
      </div>
    </div>
  );
}

export default WeatherForm;
