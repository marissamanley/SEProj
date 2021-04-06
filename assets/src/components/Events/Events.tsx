import React, { useState, useEffect } from 'react'
import EventCard from './EventCard'
import './Events.scss'

function Events() {
  return(
    <main>
    <div className="filup">
      <div className="updated">
        <h3>Last Updated:</h3>
        <h3>7 days ago</h3>
      </div>
      <div className="filter">
        <button className="all">All</button>
        <button className="past">Past</button>
        <button className="upcoming">Upcoming</button>
      </div>

    </div>
    <EventCard />
    <EventCard />
    <EventCard />
  </main>

  )
}

export default Events
