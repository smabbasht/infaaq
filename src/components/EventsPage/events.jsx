import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import "./events.css";
import PropTypes from "prop-types";

const EventsBlock = (
  name,
  description,
  date,
  Attendees //props: name, description, date
) => {
  return (
    <Fragment>
      <div className="events-block">
        <div className="event-block-header">
          <div className="event-name">Event: {name}</div>
          <div className="event-date">{date}</div>
        </div>
        <div className="event-body">
          <div className="event-description">
            <p>{description}</p>
          </div>
        </div>
        <div className="event-footer">
          <div className="event-attendees">
            Number of Attendess: {Attendees}
          </div>
        </div>
        <div className="event-buttons"></div>
      </div>
    </Fragment>
  );
};

const InfoBlock = (name, date, location, contact) => {
  //   const name = selectedItem.title;
  //   const date = selectedItem.category;
  //   const location = selectedItem.id;
  //   const contact = selectedItem.price;

  return (
    <Fragment>
        <div className="new-button">
        <button type="button">Create a new post</button>
        </div>
      <div className="events-block">
        <div className="info-table">
          <table>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{location}</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>{contact}</td>
            </tr>
          </table>
          <div className="register-button">
            <button type="button">Register</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const EventsDashboard = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

//   selectedItem.title = null;
//   selectedItem.description = null;
//   selectedItem.category = null;

  useEffect(() => {
    fetch("http://localhost:8000/events/api")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(items.title);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // render (<div className="left-panel">{InfoBlock(selectedItem)}</div>);
  };

  return (
    <Fragment>
      <div className="main-page">
        <div className="header">
          <div className="title-name"></div>
          <div className="nav-bar"></div>
        </div>
        <div className="body">
          <div className="center-panel">
            {items.map((item) => (
              <div onClick={() => handleItemClick(item)}>
                {EventsBlock(
                  item.title,
                  item.desc,
                  item.n_attandees,
                  item.id
                )}
                {/* <button onClick={() => handleItemClick(item)}>Button</button> */}
              </div>
            ))}

          </div>


          <div className="right-panel">
            {selectedItem ? (
            <div>
                {InfoBlock(selectedItem.title,selectedItem.date,selectedItem.location,selectedItem.contact)}
            </div>
            ) : (<p>More Info shows here</p>)}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventsDashboard;
