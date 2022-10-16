import React from "react";

export default function FormattedData(props) {
  let date = new Date(props.data.dt * 1000);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let monthes = [
    "January",
    "February",
    "March",
    "April",
    "TMay",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthes[date.getMonth()];

  let monthday = date.getDate();

  return (
    <div className="fs-6 mt-3">
      📅{month}, {monthday} • {day} ⌚{hours}:{minutes}
    </div>
  );
}
