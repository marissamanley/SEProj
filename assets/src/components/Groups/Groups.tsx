import React, { useState, useEffect } from 'react'
import GroupCard from './GroupCard'
import { Link } from 'react-router-dom'
import './Groups.scss'
import type { Group } from 'src/models/group'

function Groups() {
    const [groups, setGroups] = useState<Group[]>([])

    useEffect(() => {
      fetch('/api/groups')
        .then(response => response.json())
        .then((grps: Group[]) => {
          setGroups(grps)
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
      groups.map(group => (
        <GroupCard
          key={group.name}
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
