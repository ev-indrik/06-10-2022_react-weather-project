import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="weather-forecast-day">Thu</div>
          <div className="weather-forecast-icon">
            <WeatherIcons data={"11d"} size={30} />
          </div>
          <div className="weather-forecast-temperature">
            <span className="temperature-max">23°-</span>
            <span className="temperature-min"> 20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
