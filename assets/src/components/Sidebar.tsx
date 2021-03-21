import React, { useState, useEffect } from 'react'
import home from '../img/icons/home.svg'
import book from '../img/icons/book.svg'
import calendar from '../img/icons/calendar.svg'
import people from '../img/icons/people.svg'
import {Link} from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside>
        <div className="sidebar">
            <Link className="home" to='/'>
              <img src={home} alt="Home Icon" />
              Welcome
            </Link>
            <Link className="calendar" to='/events'>
              <img src={calendar} alt="Calendar Icon" />
              Event Schedule
            </Link>
            <Link className="games" to='/games'>
              <img src={book} alt="Book Icon" />
              Game Catalog
            </Link>
            <Link className="group" to='/groups'>
              <img src={people} alt="People Icon" />
              Find a Group
            </Link>
        </div> 
      </aside>
    )
}

export default Sidebar