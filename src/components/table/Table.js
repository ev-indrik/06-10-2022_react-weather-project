import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedData from "../weather-forecast/FormattedData";
import WeatherIcons from "../weather-forecast/WeatherIcons";
import CelsiusFahrenheit from "../weather-forecast/CelsiusFahrenheit";
import "./Table.css";

export default function Table({ data }) {
  if (data) {
    return (
      <div className="Table">
        <h2>
          {`🏙️ ${data.name}`} <FormattedData data={data} />
        </h2>

        <ul className="Table mt-4">
          <li>
            <CelsiusFahrenheit temp={data.temperature} />
          </li>
          <li>{`Humidity: ${data.humidity}%`}</li>
          <li>{`Wind: ${Math.round(data.wind)} km/h`}</li>
          <li>{`Description: ${data.description}`}</li>
          <li>
            <WeatherIcons data={data.icon} size={60} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="ReactAnimatedWeather mt-5 d-flex justify-content-center ">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={150}
          animate={true}
        />
      </div>
    );
  }
}
