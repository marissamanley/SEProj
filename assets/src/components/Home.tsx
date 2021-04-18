import React from 'react'
import homeImg from '../img/home-img.png'
import './Home.scss'

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <main className="home-contents">
      <div className="intro-img">
        <img src={homeImg} alt="Home Image" />
      </div>
      <div className="intro-text">
        <h1>We are the premier tabletop and</h1>
        <h2>boardgaming club at the University of Florida.</h2>
        <p>
          Welcome to Pair-A-Dice Boardgaming Club at the University of Florida!
          Join us to play many different types of board games, a variety of RPGs (i.e. Dungeons & Dragons, Powered by the 
          Apocalypse, or hipster indie one-offs), and video games, or to just hang out, meet 
          new friends, share interests, and let us enjoy your company. Players of all skill levels are always 
          welcome, and gosh darn we love meeting new people! Other club activities (once COVID is no more!) 
          include semi-frequent gimmicky parties and a hodgepodge of less frequent events 
          (hiking, sports, and special meetups for specific long/heavy games). LGBTQ+ friendly! 
          <br />
          <br />
          Check out the Naviagation Sidebar to explore the website. Want to check out the current and upcoming
          club events? The 'Event Schedule' is the place for you! Want to see the current club game inventory, 
          or submit a suggestion for a game for the club? Look over the 'Games Library'! Want to see
          the extraordinary list of current RPG groups available to join, or to submit a request to start your
          own? Lo and behold, a 'Find an RPG Group' tab!
          <br />
          <br />
          Pair-A-Dice utilizes a Discord Server as the virutal hub for the club. Discord is a free social media 
          platform where members communicate with text messaging, voice calls, video calls, and media. Join ours today
          by connecting using the Discord Widget on the Welcome page or on the top right of the page! 
        </p>
      </div>
    </main>
  )
}

export default Home
