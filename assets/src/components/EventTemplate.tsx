import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './EventTemplate.scss'

function EventTemplate() {
  const history = useHistory()
  
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [games, setGames] = useState('')
  const [discordLink, setDiscordLink] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e: any) => {
    e.preventDefault()

    const data = {
      title,
      date,
      location,
      games: games.split(', '),
      discordLink: discordLink.length ? discordLink : null,
      description
    }
  
    fetch('/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newEvent => {
      console.log(newEvent)
      history.push('/events')
    })
  }

  return (
    <main className="event-template">
      <form>
        <h2>Event Title</h2>
        <input className="title" type="text" onChange={(e) => setTitle(e.target.value)} />

        <h2>Date</h2>
        <input className="date" type="date" onChange={(e) => setDate(e.target.value)} />

        <h2>Location</h2>
        <input className="location" type="text" onChange={(e) => setLocation(e.target.value)} />

        <h2>Games (use a "," if multiple games)</h2>
        <input className="games" type="text" onChange={(e) => setGames(e.target.value)} />

        <h2>Discord Link (Optional)</h2>
        <input className="discord" type="text" onChange={(e) => setDiscordLink(e.target.value)} />

        <h2>Description</h2>
        <textarea className="description" onChange={(e) => setDescription(e.target.value)} />

        <button className="submit" onClick={onSubmit}>Submit</button>
      </form>
    </main>
  )
}

export default EventTemplate
