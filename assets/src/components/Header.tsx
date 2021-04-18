import React, { useState, useEffect } from 'react'
import logo from '../img/logo.png'
import discord from '../img/icons/discord.svg'
import facebook from '../img/icons/facebook.svg'
import './Header.css'

function Header() {
  return (
    
    <header>
      <div className="rainbow1"></div>
      <div className="rainbow2"></div>
      <div className="rainbow3"></div>
      <div className="rainbow4"></div>
      <div className="rainbow5"></div>
      <div className="rainbow6"></div>
      <div className="rainbow7"></div>
      <div className="rainbow8"></div>
      <div className="rainbow9"></div>
      <div className="rainbow10"></div>
      <div className="rainbow11"></div>
      <div className="rainbow12"></div>
      <div className="rainbow13"></div>
      {' '}
      {/*HTML element identifying a header*/}
      <div className="logo">
        <img src={logo} alt="Pair-a-Dice Logo" />
        <div className="logo-content">
          <h1>Pair-a-Dice</h1>
          <h2>Tabletop and Board Gaming Club</h2>
        </div>
      </div>
      <a
        className="facebook-link"
        href="https://www.facebook.com/PairaDiceGamingUF"
      >
        <img src={facebook} alt="Facebook Link" />
      </a>
      <a className="discord-link" href="https://discord.gg/HDuPvuCbtq">
        <img src={discord} alt="Discord Logo" />
      </a>
    </header>
  )
}

export default Header
