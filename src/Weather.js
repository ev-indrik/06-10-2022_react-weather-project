import React, { useState } from "react";
import axios from "axios";

import Table from "./components/table/Table";
import Footer from "./components/footer/Footer";
import WeatherForecast from "./components/weather-forecast/WeatherForecast";
import Search from "./components/search/Search";

import "./Weather.css";

const Weather = () => {
  const gpsClick2 = () => {
    // GPS position function

    navigator.geolocation.getCurrentPosition((response) => {
      let latitude = response.coords.latitude;
      let longitude = response.coords.longitude;
      let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl2).then((res) => {
        const info = {
          name: res.data.name,
          date: res.data.dt,
          temperature: res.data.main.temp,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          coordinates: res.data.coord,
        };

        setData(info);
      });
    });
  };

  let [city, setCity] = useState("");
  let apiKey = "e198a574d16b9223ea11e9b7c93f17a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let [data, setData] = useState();

  function responseWeather(userCityInput) {
    setCity(userCityInput);
  }

  function getApiData() {
    if (city) {
      axios.get(apiUrl).then((res) => {
        const info = {
          name: res.data.name,
          date: res.data.dt,
          temperature: res.data.main.temp,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          coordinates: res.data.coord,
        };
        setData(info);
      });
    } else {
      alert("Please, enter valid city name!");
    }
  }

  return (
    <div className="Weather">
      <h1 className="mb-3">Weather App</h1>
      <Search
        responseWeather={responseWeather}
        getApiData={getApiData}
        gpsClick2={gpsClick2}
      />

      <div className="content-section">
        <Table data={data} />
      </div>
      <WeatherForecast data={data} />

      <Footer />
    </div>
  );
};

export default Weather;
