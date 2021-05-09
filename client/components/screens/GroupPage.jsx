import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { getGroupById, getGroupMembers, getGroupsTags } from '../../apis/groups'
import { getPostsByGroup } from '../../apis/posts'
import Post from '../Post'

// get redux information by console.logging props.user, props.region and props.userGroups
function GroupPage () {
  const [group, setGroup] = useState([])
  const [members, setMembers] = useState([])
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    getGroupById(1)
      .then(group => {
        setGroup(group)

        return null
      })
      .catch(e => {
        console.log(e.message)
      })

      getGroupMembers(1)
        .then((members) => {
          setMembers(members)
          return null
        })
         .catch(e => {
          console.log(e.message)
      })

      getPostsByGroup(1)
       .then((posts) => {
        setPosts(posts)
        return null
      })
      .catch(e => {
        console.log(e.message)
      })

      getGroupsTags(1)
        .then(tags => {
          console.log(tags)
          setTags(tags)
          return null
        })
        .catch(e => {
          console.log(e.message)
        })
  }, [])

  return (
    <>
      <div>
        <img className="w-full" src="./images/Mobile Friendly Banner.png" />
        <div className='px-8 py-4 flex sticky top-0 bg-white shadow-md justify-between items-center z-50'>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <h2 className='text-4xl text-gray-700 font-semibold px-8'>{ group.name }</h2>
          </div>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl hover:text-white py-2 px-12 rounded'>Join Group</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className='px-8 py-4 flex flex-col sticky top-24 h-screen bg-white'>
            <h3 className="font-semibold text-xl text-gray-600 pb-4">Tags</h3>
            {tags.length > 0 && tags.map((tag) =>
              <button key={tag.id} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white w-full py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{tag.tag}</button>
            )}
          </div>
          <div className="col-span-2 px-8 py-4">
            <h3 className="font-semibold text-2xl text-gray-600 pb-4">Feed</h3>
            <div className="grid grid-cols-1 gap-8">
              {posts.length > 0 && posts.map((post) =>
                <Post post={post} key={post.id}/>
              )}
            </div>
          </div>
          <div className='px-8 py-4 flex flex-col sticky top-24 h-screen bg-white'>
            <h3 className="font-semibold text-2xl text-gray-600 pb-4">Group Members</h3>
            <div className="bg-gray-50 p-4">
              {members.length > 0 && members.map((member) => <div key={member.id}>
                <h6>{member.first_name} {member.last_name}</h6>
              </div> )}
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