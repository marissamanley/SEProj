import React from 'react'
import './GroupCard.scss'
import dragon from '../../img/dragon.png'
import { linkSync } from 'node:fs'

function GroupCard({ name, game, url, description }: any)  {
  console.log(game)
  return (
    <div className="group-card">
      <div className="head">
        <div className="club">
          <img src={dragon} alt="Group Logo" />
          <div className="content">
            <h1>{name}</h1>
            <h2>{game.join(", ")}</h2>
          </div>
        </div>
        {url &&
        <a href={url}>View on Discord</a>}
        
      </div>
      <p>
        {description}
      </p>
    </div>
  )
}

export default GroupCard
