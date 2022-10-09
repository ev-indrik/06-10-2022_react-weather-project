import React from "react";
import "./Table.css";

export default function Table(props) {
  if (props.data) {
    return (
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
    );
  } else {
    return null;
  }
}
