import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home'
import Games from './components/Games/Games'
import GamesTemplate from './components/GamesTemplate'
import Groups from './components/Groups/Groups'
import Events from './components/Events/Events'
import EventTemplate from './components/EventTemplate'

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router>
      <Switch>
        <Route path="/events/create">
          <Layout>
            <EventTemplate />
          </Layout>
        </Route>
        <Route path="/events">
          <Layout>
            <Events />
          </Layout>
        </Route>
        <Route path="/groups">
          <Layout>
            <Groups />
          </Layout>
        </Route>
        <Route path="/games/submit">
          <Layout>
            <GamesTemplate />
          </Layout>
        </Route>
        <Route path="/games">
          <Layout>
            <Games />
          </Layout>
        </Route>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
