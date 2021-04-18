import React, { useState, useEffect } from 'react'
import GroupCard from './GroupCard'

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
