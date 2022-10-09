import React from "react";

export default function Search(props) {
  function updateCity(event) {
    props.responseWeather(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.getApiData();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="serach" placeholder="enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
