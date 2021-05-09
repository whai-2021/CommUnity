import React, { useEffect, useState } from 'react'
import PageLinks from '../PageLinks'
import { connect } from 'react-redux'
import { getUsersGroups, getGroups } from '../../apis/groups'
import { Link } from 'react-router-dom'

// get redux information by console.logging props.user, props.region and props.userGroups
function WhatsHappening (props) {
  const [usersGroups, setUsersGroups] = useState('')
  const [groups, setGroups] = useState([])

  useEffect(() => {
    getUsersGroups(1)
      .then((res) => {
        setUsersGroups(res)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })

    getGroups()
      .then((res) => {
        setGroups(res)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <PageLinks />
      <div className="w-screen">
        <h1 className="w-full text-center text-4xl font-bold text-gray-600">Whats Happening</h1>
        <div className="flex justify-center">
          <div className="w-3/4">
            {usersGroups && <div className="">
              <h2 className="py-8 text-2xl font-semibold text-gray-600">My Groups</h2>
              <div className="grid gap-8 grid-cols-3">
                {usersGroups.map((group) => (
                  <Link key={group.id} to={`/whatshappening/${group.id}`}>
                    <div key={group.id} className="w-full h-64 bg-gray-100 rounded-lg shadow-sm">
                      {group.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            }
            <div>
              <h2 className="py-8 text-2xl font-semibold text-gray-600">All Groups</h2>
              <div className="grid gap-8 grid-cols-3">
                {groups.map((group) => (
                  <Link key={group.id} to={`/whatshappening/${group.id}`}>
                    <div key={group.id} className="w-full h-64 bg-gray-100 rounded-lg shadow-sm">
                      {group.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(WhatsHappening)
