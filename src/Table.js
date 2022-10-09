import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Table.css";

export default function Table(props) {
  if (props.data) {
    return (
      <div className="Table">
        <h2>{`City: ${props.data.name}`}</h2>
        <ul className="Table">
          <li>{`Temperature: ${Math.round(props.data.main.temp)}`}</li>
          <li>{`Description: ${props.data.weather[0].main}`}</li>
          <li>{`Humidity: ${props.data.main.humidity}%`}</li>
          <li>{`Wind: ${Math.round(props.data.wind.speed)} km/h`}</li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt="icon"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="ReactAnimatedWeather">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={120}
          animate={true}
        />
      </div>
    );
  }
}
