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
      <div>
        <h2 className='flex py-2 text-5xl container mx-auto'>{ group.name }</h2>
        <div className='grid grid-cols3 gap-4'>
          <div className='col-span-3 box-border h-32 w-132 p-4 border-4'>Join/Leave</div>
          <div>
            <ul>
              <li>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>All</button>
              </li>
              <li>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Shopping</button>
              </li>
              <li>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Events</button>
              </li>
              <li>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Location</button>
              </li>
              <li>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Job Listing</button>
              </li>
              <li>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Custom</button>
              </li>
            </ul>
          </div>
          <div>Feed</div>
          <div>
            <h1 className='text-center'>Members</h1>
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

export default connect(mapStateToProps)(GroupPage)
