import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Games from './components/Games'
import Groups from './components/Groups'
import Events from './components/Events'

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router>
      <Switch>
        <Route path='/events'>
          <Events/>
        </Route>
        <Route path='/groups'>
          <Groups/>
        </Route>
        <Route path='/games'>
          <Games/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>

    </Router>

  )
}

export default App
