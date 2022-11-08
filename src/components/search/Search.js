import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CurrentPosition from "./CurrentPosition";
import "./Search.css";

export default function Search({ responseWeather, getApiData, gpsClick2 }) {
  function updateCity(event) {
    responseWeather(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getApiData();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-7 input-wrapper">
          <Form.Group className="mb-3">
            <Form.Control
              type="search"
              placeholder="Enter city here.."
              autoFocus="on"
              onChange={updateCity}
            />
          </Form.Group>
        </div>
        <div className="col-4 button-wrapper">
          <Button
            variant="primary"
            type="submit"
            className="search-button mb-4 me-1 w-100"
          >
            Search
          </Button>
          <CurrentPosition gpsClick2={gpsClick2} />
        </div>
      </div>
    </Form>
  );
}
