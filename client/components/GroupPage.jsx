import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getGroupById } from '../apis/groups'

// get redux information by console.logging props.user, props.region and props.userGroups
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

function mapStateToProps (state) {
  return {
    region: state.region,
    user: state.user,
    userGroups: state.userGroups
  }
}

export default connect(mapStateToProps)(GroupPage)
