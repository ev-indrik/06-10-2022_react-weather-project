import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Search(props) {
  function updateCity(event) {
    props.responseWeather(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.getApiData();
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="serach" placeholder="enter a city" onChange={updateCity} />
    //   <input type="submit" value="Search" />
    // </form>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="search"
          placeholder="Enter city here.."
          onChange={updateCity}
        />
      </Form.Group>
      <Button variant="primary" type="submit" size="sm" className="mb-3">
        Search
      </Button>
    </Form>
  );
}
