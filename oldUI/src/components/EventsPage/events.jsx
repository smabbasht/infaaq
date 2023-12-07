import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import "./events.css";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

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
        </div>
      </div>
    </Fragment>
  );
};

const EventsDashboard = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  //   selectedItem.title = null;
  //   selectedItem.description = null;
  //   selectedItem.category = null;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
          <div className="nav-bar">
            <nav
              className="navbar navbar-expand-lg"
              style={{ backgroundColor: "#595959" }}
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  I N F A A Q
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Volunteer
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Profile
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Profile Info
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            LogOut
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="body">
          <div className="center-panel">
            <button type="button" onClick={() => navigate("/eventpost")}>
              Post an Event
            </button>

            {items.map((item) => (
              <div className="events-block">
                {EventsBlock(item.title, item.desc, item.n_attandees, item.id)}
                {/* <button onClick={() => handleItemClick(item)}>Button</button> */}

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleItemClick(item)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div>
            {selectedItem ? (
              <div>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          <b>Event Details</b>
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        {InfoBlock(
                          selectedItem.title,
                          selectedItem.date,
                          selectedItem.location,
                          selectedItem.contact
                        )}
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">
                          Donate
                        </button>
                        <button type="button" class="btn btn-primary">
                          Volunteer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Copyright team Infaaq</p>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EventsDashboard;
