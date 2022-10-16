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
    "02d": "green",
    "02n": "green",
    "03d": "green",
    "03n": "green",
    "04d": "blueviolet",
    "04n": "blueviolet",
    "09d": "blue",
    "09n": "blue",
    "10d": "blue",
    "10n": "blue",
    "11d": "blue",
    "11n": "blue",
    "13d": "white",
    "13n": "white",
    "50d": "silver",
    "50n": "silver",
  };

  return (
    <div className="d-inline align-middle">
      <ReactAnimatedWeather
        icon={codeMapping[props.data.weather[0].icon]}
        color={iconColor[props.data.weather[0].icon]}
        size={60}
        animate={true}
      />
    </div>
  );
}
