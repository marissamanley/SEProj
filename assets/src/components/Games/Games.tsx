import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GameImg1 from '../../img/Game_img_1.png'
import GameImg2 from '../../img/Game_img_2.png'
import GameImg from '../../img/BoardgameStock.jpeg'
import './Games.scss'
import GamesCard from './GamesCard'
import Header from '../Header'
import Sidebar from '../Sidebar'

interface GamesProps {}

function Games({}: GamesProps) {
  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('/api/games')
    .then(response => response.json())
    .then(gmes => {
      setGames(gmes)
      console.log(gmes)
    })
  }, [])

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
            {
              games.map((game: any) => (
              <li>
                
                <img src={GameImg} alt="GameImg" />
                <GamesCard 
                title = {game.title}
                />
              </li>
              ))
            }
        </ul>
    </div>
  )
}


export default Games

