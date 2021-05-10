import React, { useEffect, useState } from 'react'
import PageLinks from '../PageLinks'
import { connect } from 'react-redux'
import { getUsersGroups, getGroups, addGroup } from '../../apis/groups'
import { Link, NavLink } from 'react-router-dom'

// get redux information by console.logging props.user, props.region and props.userGroups
function WhatsHappening (props) {
  const [usersGroups, setUsersGroups] = useState('')
  const [groups, setGroups] = useState([])
  const [formVisible, setFormVisible] = useState(false)

  const initialFormData = { name: '' }
  const [formData, setFormData] = useState(initialFormData)

  function handleChange (e) {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  function handleSubmit (e) {
    e.preventDefault()
    addGroup(formata, 1)
  }

  function showForm () {
    return (
      <div>
        <form>
          <label>Group Name: </label>
          <input name='name' type='text' value={formData.name} onChange={handleChange} className='bg-gray-200'></input>
          <button className='rounded-full border-2 text-black bg-blue-400 focus:outline-none focus:border-blue-400' onClick={handleSubmit}>Create</button>
        </form>
      </div>
    )
  }

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
              <div className='flex justify-between py-8'>
                <h2 className=" text-2xl font-semibold text-gray-600">My Groups</h2>
                <button onClick={() => setFormVisible(true)} className='px-12 rounded-full border-2 border-blue-500 border-opacity-50 hover:bg-blue-500'>+ Create Group</button>
                {formVisible && showForm()}
              </div>
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
