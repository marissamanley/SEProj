import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './GroupTemplate.scss'

function GroupTemplate() {
  const history = useHistory()
  
  const [name, setName] = useState('')
  const [game, setGames] = useState('')
  const [url, seturl] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = (e: any) => {
    e.preventDefault()

    const data = {
      name,
      location,
      game: game.split(', '),
      url: url.length ? url : null,
      description
    }
  
    fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newGroup => {
      console.log(newGroup)
      history.push('/groups')
    })
  }

  return (
    <main className="group-template">
      <form>
        <h2>Group Name</h2>
        <input className="name" type="text" onChange={(e) => setName(e.target.value)} />

        <h2>Games (use a "," if multiple games)</h2>
        <input className="game" type="text" onChange={(e) => setGames(e.target.value)} />

        <h2>Discord Link (Optional)</h2>
        <input className="discord" type="text" onChange={(e) => seturl(e.target.value)} />

        <h2>Description</h2>
        <textarea className="description" onChange={(e) => setDescription(e.target.value)} />

        <button className="submit" onClick={onSubmit}>Submit</button>
      </form>
    </main>
  )
}

export default GroupTemplate