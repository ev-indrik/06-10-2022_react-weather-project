import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const iconColor = {
    "01d": "goldenrod",
    "01n": "goldenrod",
    "02d": "#d9a711",
    "02n": "#d9a711",
    "03d": "#d9a711",
    "03n": "#d9a711",
    "04d": "#0d6efd",
    "04n": "#0d6efd",
    "09d": "#0d6efd",
    "09n": "#0d6efd",
    "10d": "#0d6efd",
    "10n": "#0d6efd",
    "11d": "#0d6efd",
    "11n": "#0d6efd",
    "13d": "white",
    "13n": "white",
    "50d": "silver",
    "50n": "silver",
  };

  return (
    <div className="d-inline align-middle">
      <ReactAnimatedWeather
        icon={codeMapping[props.data]}
        color={iconColor[props.data]}
        size={props.size}
        animate={true}
      />
    </div>
  );
}
