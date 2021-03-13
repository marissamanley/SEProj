import React, { useState, useEffect } from 'react'
import logo from './img/logo.png'
import discord from './img/icons/discord.svg'
import facebook from './img/icons/facebook.svg'
import './App.css'

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [statement, setStatement] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(response => {
        setStatement(response.statement)
      })
  }, [])

  return (
    <div className="app">
      <header>
        <div className="logo">
          <img src={logo} alt="Pair-a-Dice Logo" />
          <div className="logo-content">
            <h1>Pair-a-Dice</h1>
            <h2>Tabletop and Board Gaming Club</h2>
          </div>
        </div>

        <a className="facebook-link" href="https://www.facebook.com/PairaDiceGamingUF">
          <img src={facebook} alt="Facebook Link" />
        </a>
        <a className="discord-link" href="https://discord.gg/HDuPvuCbtq">
          <img src={discord} alt="Discord Logo" />
        </a>
      </header>
    </div>
  )
}

export default App
