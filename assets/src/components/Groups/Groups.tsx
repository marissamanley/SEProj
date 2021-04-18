import React, { useState, useEffect } from 'react'
import GroupCard from './GroupCard'
import { Link } from 'react-router-dom'
import './Groups.scss'

function Groups() {
    const [groups, setGroups] = useState([])

    useEffect(() => {
      fetch('/api/groups')
        .then(response => response.json())
        .then(evnts => {
          setGroups(evnts)
          console.log(evnts)
        })
    }, [])
  return (
    <main>
      <div className="head">
        <div className="spacer">
        </div>
        <div className="create">
            <Link className="newGroup" to="/groups/new">
            Create Group
            </Link>
        </div>
      </div>
      {
      groups.map((group: any) => (
        <GroupCard
          key={group.title}
          name={group.name}
          game={group.game}
          url={group.url}
          description={group.description}
        />
      ))
    }
     
    </main>
  )
}

export default Groups
