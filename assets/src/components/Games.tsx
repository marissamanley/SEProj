import React, { useState, useEffect } from 'react'
import './Games.css'
import Header from './Header'
import Sidebar from './Sidebar'

interface GamesProps {}

function Games({}: GamesProps) {
  return (
    <div className="app">
      <div className="games-content">
        <Header />
        <div className="container">
          <Sidebar />
          <div className="title">
            <h1>Game Catalog</h1>
          </div>
          <div className="games"></div>
        </div>
      </div>
    </div>
  )
}

export default Games
