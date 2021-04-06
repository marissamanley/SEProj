import React from 'react'
import './EventCard.scss'
import location from '../../img/icons/location.svg'

function GroupCard() {
  return (
    <div className="event-card">
      <div className="head">
        <div className="event">
          <div className="date">
              <h2>FEB</h2>
              <h1>22</h1>
          </div>
          <div className="content">
            <h1>Club game night</h1>
            <img src={location} />
            <h2>Virtual</h2>
            <h2 className="games">Multiple Games</h2>
          </div>
        </div>
        <button>View on Discord</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam
        aliquam sem. Sed nisi lacus sed viverra tellus in hac. Tincidunt ornare
        massa eget egestas purus.
      </p>
    </div>
  )
}

export default GroupCard
