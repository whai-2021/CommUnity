import React from 'react'
import { useState, useEffect } from 'react'

import { getGroupById } from '../apis/groups'

function GroupPage () {
  const [group, setGroup] = useState([])

  useEffect(() => {
    getGroupById(1)
      .then(group => {
        console.log(group)
        setGroup(group)

        return null
      })
      .catch(e => {
        console.log(e.message)
      })
  }, [])

  return (
    <>
      <h1>GroupPage</h1>
      <div>
        {group.map(({ name }) =>
          <h2>{ name }</h2>
        )}
      </div>
    </>
  )
}

export default GroupPage
