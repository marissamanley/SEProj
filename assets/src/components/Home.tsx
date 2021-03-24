import React, { useState, useEffect } from 'react'
import homeImg from '../img/home-img.png'
import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar'

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <div className="root">
      <div className="app">
        <Header />
        <div className="container">
          <Sidebar />
          <main className="home-contents">
            <div className="intro-img">
              <img src={homeImg} alt="Home Image" />
            </div>
            <div className="intro-text">
              <h1>We are the premier tabletop and boardgaming</h1>
              <h2>club at the University of Florida.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pellentesque nec nam aliquam sem. Sed nisi lacus sed viverra
                tellus in hac. Tincidunt ornare massa eget egestas purus. Nisl
                rhoncus mattis rhoncus urna neque viverra. Sit amet commodo
                nulla facilisi nullam vehicula ipsum.
                <br />
                <br />
                Aliquet enim tortor at auctor urna nunc id cursus metus. Mi in
                nulla posuere sollicitudin aliquam ultrices sagittis. Mauris
                rhoncus aenean vel elit scelerisque mauris pellentesque. Neque
                vitae tempus quam pellentesque nec nam aliquam sem.
                <br />
                <br />
                Congue eu consequat ac felis donec et. Enim nulla aliquet
                porttitor lacus luctus. Hac habitasse platea dictumst vestibulum
                rhoncus est pellentesque. Egestas purus viverra accumsan in nisl
                nisi scelerisque. Sagittis id consectetur purus ut faucibus
                pulvinar elementum integer. Ornare lectus sit amet est placerat
                in egestas erat. In metus vulputate eu scelerisque felis
                imperdiet proin fermentum. Eget arcu dictum varius duis at
                consectetur lorem. Vel eros donec ac odio tempor orci.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
