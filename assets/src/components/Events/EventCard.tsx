import React from 'react'
import './EventCard.scss'
import location from '../../img/icons/location.svg'

function EventCard({ title, location, games, url, description, date }: any) {
  return (
    <div className="event-card">
      <div className="head">
        <div className="event">
          <div className="date">
              <h2>FEB</h2>
              <h1>22</h1>
          </div>
          <div className="content">
            <h1>{title}</h1>
            <img src={location} />
            <h2>{location}</h2>
            <h2 className="games">{games}</h2>
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
