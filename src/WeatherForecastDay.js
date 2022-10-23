import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  console.log(props.dailyForecast);
  function temperatureMax() {
    let temperature = Math.round(props.dailyForecast.temp.max);
    return `${temperature}°`;
  }

  function temperatureMin() {
    let temperature = Math.round(props.dailyForecast.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.dailyForecast.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    props.dailyForecast && (
      <div>
        <div className="weather-forecast-day">{day()}</div>
        <div className="weather-forecast-icon">
          <WeatherIcons data={props.dailyForecast.weather[0].icon} size={30} />
        </div>
        <div className="weather-forecast-temperature">
          <span className="temperature-max">{temperatureMax() + "-"}</span>
          <span className="temperature-min">{temperatureMin()}</span>
        </div>
      </div>
    )
  );
}
