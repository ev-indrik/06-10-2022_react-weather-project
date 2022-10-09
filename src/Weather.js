import React, { useState } from "react";
import axios from "axios";

import Search from "./Search";
import Table from "./Table";

import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let apiKey = "e198a574d16b9223ea11e9b7c93f17a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let [data, setData] = useState();

  function responseWeather(userCityInput) {
    setCity(userCityInput);
  }

  function getApiData() {
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  }

  return (
    <div className="Weather">
      <h1>Weather App</h1>
      <Search responseWeather={responseWeather} getApiData={getApiData} />
      <Table data={data} />
    </div>
  );
}