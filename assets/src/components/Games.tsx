import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameImg1 from '../img/Game_img_1.png'
import GameImg2 from '../img/Game_img_2.png'
import './Games.scss'
import Header from './Header'
import Sidebar from './Sidebar'

interface GamesProps {}

function Games({}: GamesProps) {
  return (
    
    <div className="games-content">
        <div className="topbox">
            <div className="box">
            </div>

            <div className="submit">
            <Link className="submitButton" to="/games/submit">
            Submit Game Request
            </Link>
            </div>
        </div>
    
        <ul className="games">
        <li>
            <img src={GameImg1} alt="GameImg1" />
            <h1>Betrayal at House on the Hill</h1>
        </li>
        <li>
            <img src={GameImg2} alt="GameImg2" />
            <h1>Catan</h1>
        </li>
        </ul>
    </div>
  )
}

export default Games
