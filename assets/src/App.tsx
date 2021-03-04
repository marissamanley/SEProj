import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

interface AppProps {}

function App({}: AppProps) {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <p data-test-id="server-statement">
          The server is: {statement}
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
