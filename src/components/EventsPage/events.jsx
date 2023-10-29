import { render } from "@testing-library/react";
import React, {Component} from "react";
import { Fragment } from "react";
import './events.css'
import PropTypes from 'prop-types'

const  EventsBlock = (name,description,date,Attendees) => //props: name, description, date
{
    return (
        <Fragment>
            <div className="events-block">
                <div className="event-block-header">
                    <div className="event-name">
                        Event: {name}
                    </div>
                    <div className="event-date">
                        {date}
                    </div>
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
}

const  InfoBlock = () => 
{
    return (
        <Fragment>
            <div className="events-block">
                <div className="info-table">
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>SDADADA</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>143424131</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>dadsdadsa h kj hfs kjks d sd fhks kdhfkshksfsh sdkd kjssh fkshfk</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>2343241</td>
                        </tr>
                    </table>
                    <div className="register-button">
                        <button type="button">Register</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}



const EventsDashboard = () => {
    const description = "Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
    r sint occaecat cupidatat non proidenLorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
    r sint occaecat cupidatat non proidenLorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
    r sint occaecat cupidatat non proident, sunthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <Fragment>
            <div className="main-page">
                <div className="header">
                    <div className="title-name">

                    </div>
                    <div className="nav-bar">

                    </div>
                </div>
                <div className="body">
                    <div className="center-panel">
                        {EventsBlock("TEDx: WeBDeV",description,"2 May 2099","10")}
                        
                        {EventsBlock("TEDx: Data Science",description,"3 May 2099","600")}


                    </div>

                    <div className="left-panel">
                        {InfoBlock()}
                    </div>   
                </div>

            </div>
        </Fragment>
    );
};

export default EventsDashboard;