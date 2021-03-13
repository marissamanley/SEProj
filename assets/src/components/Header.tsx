import React, { useState, useEffect } from 'react'
import logo from '../img/logo.png'
import discord from '../img/icons/discord.svg'
import facebook from '../img/icons/facebook.svg'
import './Header.css'

function Header() {
    return (
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
    )
}

export default Header