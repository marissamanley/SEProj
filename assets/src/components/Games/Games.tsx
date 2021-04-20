import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Game } from '../../models/game'
import GameImg from '../../img/BoardgameStock.jpeg'
import './Games.scss'
import GamesCard from './GamesCard'

interface GamesProps {}

function Games({}: GamesProps) {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('/api/games')
    .then(response => response.json())
    .then((gmes: Game[]) => {
      setGames(gmes)
    })
  }, [])

  return (
    
    <div className="games-content">
        <div className="topbox">
            <div className="box">
            </div>

            <div className="submit">
            <Link className="submitButton" to="/games/submit">
            Submit Game Suggestion
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

