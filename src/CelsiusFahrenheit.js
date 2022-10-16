import React, { useState } from "react";
import "./CelsiusFahrenheit.css";

export default function CelsiusFahrenheit(data) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  let temperature = data.temp;

  if (unit === "celsius") {
    return (
      <div className="CelsiusFahrenheit">
        {`Temperature: ${Math.round(temperature)} °C |`}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="CelsiusFahrenheit">
        {`Temperature: ${Math.round(temperature * 1.8 + 32)}`}
        <a href="/" onClick={showCelsius}>
          {" "}
          °C
        </a>{" "}
        | °F
      </div>
    );
  }
}
