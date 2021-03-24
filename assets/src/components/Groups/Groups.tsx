import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Groups.css'
import GroupCard from './GroupCard'

function Groups() {
  return (
    <div className="root">
      <div className="app">
        <Header />
        <div className="container groups">
          <Sidebar />

          <main>
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Groups
