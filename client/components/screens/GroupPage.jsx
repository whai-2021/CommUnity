import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getGroupById, getGroupMembers } from '../../apis/groups'

// get redux information by console.logging props.user, props.region and props.userGroups
function GroupPage () {
  const [group, setGroup] = useState([])
  const [members, setMembers] =useState([])

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

      getGroupMembers()
        .then((res) => {
          setMembers(res)
          return null
        })
         .catch(e => {
          console.log(e.message)
      })
  }, [])

  return (
    <>
      <div>
        <div className='grid grid-cols-4 gap-4'>
          <div className='col-span-4 h-96 text-end px-8 py-4 bg-cover flex items-end' style={{backgroundImage: `url('./images/Mobile Friendly Banner.png')`}}>
          </div>
          <div className='col-span-4 px-8 pt-4 pb-8 flex sticky shadow-md items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <h2 className='text-4xl text-gray-700 font-semibold px-8'>{ group.name }</h2>
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl hover:text-white py-2 px-12 rounded'>Join Group</button>
          </div>
          <div className='px-8 py-4'>
            <h3 className="font-semibold text-xl text-gray-600 pb-4">Tags</h3>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-full py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Custom</button>
          </div>
          <div className="col-span-2 px-8 py-4">
            <h3 className="font-semibold text-2xl text-gray-600 pb-4">Feed</h3>
          </div>
          <div>
            <h3 className="font-semibold text-2xl text-gray-600 pb-4">Group Members</h3>
            <div className="bg-gray-50 p-4">
              <div>
                <h6>Caleb Ion</h6>
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

export default connect(mapStateToProps)(GroupPage)
