import React from 'react'
import './GamesCard.scss'

function GamesCard({ title }:any) {
    return(
        <div className="games-card">
            <div className="game-title">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default GamesCard