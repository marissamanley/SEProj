import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import DiscordWidget from '../UI/DiscordWidget'
import './Layout.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">{children}</div>
      <div className="widget">
        <DiscordWidget />
      </div>
    </div>
  )
}

export default Layout
