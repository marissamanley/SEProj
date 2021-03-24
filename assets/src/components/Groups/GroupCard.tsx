import React from 'react'
import './GroupCard.css'
import dragon from '../../img/dragon.png'

function GroupCard() {
  return (
    <div className="group-card">
      <div className="head">
        <div className="club">
          <img src={dragon} alt="Group Logo" />
          <div className="content">
            <h1>Gators of the Coast</h1>
            <h2>Dungeons And Dragons</h2>
          </div>
        </div>
        <button>View on Discord</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam
        aliquam sem. Sed nisi lacus sed viverra tellus in hac. Tincidunt ornare
        massa eget egestas purus.
      </p>
    </div>
  )
}

export default GroupCard
