import React, { useState } from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [result, setResult] = useState(null);
  // function handleResponse(response) {
  // }
  if (props.data && !result) {
    const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    let latitude = props.data.coord.lat;
    let longitude = props.data.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setResult(response);
      })
      .catch((error) => {
        console.log("MY ERROR:", error);
      });
  }
  return (
    props.data && (
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
    )
  );
}
