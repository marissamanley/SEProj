import React, { useState, useEffect } from 'react'
import type { Announcement } from './../models/announcement'
import './AnnouncementBox.scss'

function AnnouncementBox() {

  const [announcements, setAnnouncements] = useState<Announcement[]>([])

  useEffect(() => {
    fetch('/api/announcements')
      .then(response => response.json())
      .then((ancmnt: Announcement[]) => {
        setAnnouncements(ancmnt)
      })
  }, [])

  return (
    <div className="announcement-box">
      {
      announcements.map( announcements => {
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = new Date(announcements.date);
        let month = monthNames[d.getMonth()];
        let day = d.getDate() + 1;
 
        return (
          <>
              <div className="head">
              <div className="announcement">
                  <div className="date">
                      <h1>{month + " " + day}</h1>
                  </div>
                  <div className="content">
                  <h1>{announcements.title}</h1>
                  </div>
              </div>
              </div>
              <p>
                {announcements.description}
              </p>
          </>
        )
      })
      }
        </div>
  )
}

export default AnnouncementBox