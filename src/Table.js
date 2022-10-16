import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedData from "./FormattedData";
import WeatherIcons from "./WeatherIcons";
import "./Table.css";

export default function Table(props) {
  if (props.data) {
    return (
      <div className="Table">
        <h2>
          {`🏙️ ${props.data.name}`} <FormattedData data={props.data} />
        </h2>
        <ul className="Table mt-4">
          <li>{`Temperature: ${Math.round(props.data.main.temp)}°C`}</li>
          <li>{`Humidity: ${props.data.main.humidity}%`}</li>
          <li>{`Wind: ${Math.round(props.data.wind.speed)} km/h`}</li>
          <li>{`Description: ${props.data.weather[0].main}`}</li>
          <li>
            <WeatherIcons data={props.data} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="ReactAnimatedWeather mt-5 d-flex justify-content-center">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={160}
          animate={true}
        />
      </div>
    );
  }
}
