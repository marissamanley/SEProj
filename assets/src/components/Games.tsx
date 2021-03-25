import React, { useState, useEffect } from 'react'
import GameImg1 from "../img/Game_img_1.png"
import GameImg2 from "../img/Game_img_2.png"
import './Games.css'
import Header from './Header'
import Sidebar from './Sidebar'

interface GamesProps {}

function Games({}: GamesProps) {
    return (
        
        <div className="games-content">
            <Header/>
            <div className="title">
                <h1>Game Catalog</h1>
            </div>
            <div className="container">
                <Sidebar/>
                <div className="games">
                    <div className="g1">
                        <div className="g1_img">
                            <img src={GameImg1} alt="GameImg1" />
                        </div>
                        <div className="g1_text">
                            <h1>Betrayal at House on the Hill</h1>
                        </div>
                    </div>
                    <div className="g2">
                        <div className="g2_img">
                            <img src={GameImg2} alt="GameImg2" />
                        </div>
                        <div className="g2_text">
                            <h1>Catan</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}   

export default Games
