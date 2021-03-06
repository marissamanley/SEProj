import React, { useState, useEffect } from 'react'
import type { Event } from '../../models/event'
import EventCard from './EventCard'
import './Events.scss'

function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch('/api/events')
      .then(response => response.json())
      .then((evnts: Event[]) => {
        setEvents(evnts)
      })
  }, [])

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

    {
      events.map(event => (
        <EventCard
          key={event.title}
          title={event.title}
          location={event.location}
          games={event.games}
          url={event.url}
          description={event.description}
          date={event.date}
        />
      ))
    }
  </main>

  )
}

export default Events
