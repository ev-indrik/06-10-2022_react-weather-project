import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(null);
  }, [props.data]);

  if (props.data && !result) {
    const apiKey = "0a521eaf234a3a56f45252fac3c737ad";
    let latitude = props.data.coord.lat;
    let longitude = props.data.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        setResult(response);
      })
      .catch((error) => {
        console.log("MY ERROR:", error);
      });
  }
  return (
    result && (
      <div className="WeatherForecast">
        <div className="row">
          {result.data.daily.map(
            (itemForecast, index) =>
              index < 5 && (
                <WeatherForecastDay dailyForecast={itemForecast} key={index} />
              )
          )}
        </div>
      </div>
    )
  );
}
