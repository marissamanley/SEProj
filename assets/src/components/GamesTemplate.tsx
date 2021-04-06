import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './GamesTemplate.scss'

function GamesTemplate() {
    return (
        <main className="games-template">
            <form>
            <h2>Game Title</h2>
                <input className="title" type="text" />

            <h2>Genre</h2>
                <input className="genre" type="text" />

            <h2>(Optional) Store/Purchase Link</h2>
                <input className="link" type="text" />

            <h2>Description</h2>
                <textarea className="description" />

        <button className="submit">Submit</button>
      </form>
    </main>
    )
}

export default GamesTemplate;