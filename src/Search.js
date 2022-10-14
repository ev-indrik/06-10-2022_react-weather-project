import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Search.css";

export default function Search(props) {
  function updateCity(event) {
    props.responseWeather(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.getApiData();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <Form.Group className="mb-3">
            <Form.Control
              type="search"
              placeholder="Enter city here.."
              autoFocus="on"
              onChange={updateCity}
            />
          </Form.Group>
        </div>
        <div className="col-4">
          <Button variant="primary" type="submit" className="mb-4 w-100">
            Search
          </Button>
        </div>
      </div>
    </Form>
  );
}
