import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './EventTemplate.scss'

function EventTemplate() {
  return (
    <main className="event-template">
      <form>
        <h2>Event Title</h2>
        <input className="title" type="text" />

        <h2>Date</h2>
        <input className="date" type="date" />

        <h2>Location</h2>
        <input className="location" type="text" />

        <h2>Game(s)</h2>
        <input className="games" type="text" />

        <h2>Discord Link (Optional)</h2>
        <input className="discord" type="text" />

        <h2>Description</h2>
        <textarea className="description" />

        <button className="submit">Submit</button>
      </form>
    </main>
  )
}

export default EventTemplate
