import React from 'react'
import './EventCard.scss'
import locationIcon from '../../img/icons/location.svg'

function EventCard({ title, location, games, url, description, date }: any) {

    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date(date);
    let month = monthNames[d.getMonth()];
    let day = d.getDate() + 1;
  return (
    <div className="event-card">
      <div className="head">
        <div className="event">
          <div className="date">
              <h2>{month}</h2>
              <h1>{day}</h1>
          </div>
          <div className="content">
            <h1>{title}</h1>
            <img src={locationIcon} />
            <h2>{location}</h2>
            <h2 className="games">{games.join(", ")}</h2>
          </div>
        </div>
        {
          url &&
          <a href={url}>View on Discord</a>
        }
      </div>
      <p>
        {description}
      </p>
    </div>
  )
}

export default EventCard
