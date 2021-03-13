import React, { useState, useEffect } from 'react'
import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar'

interface HomeProps {}

function Home({}: HomeProps) {
  // Create the count state.
  const [statement, setStatement] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(response => {
        setStatement(response.statement)
      })
  }, [])

  return (
    <div className="app">
     
        <Header/>
        <Sidebar/>
      
    </div>
  )
}

export default Home
