import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getGroupById, getGroupMembers, addUserToGroup, deleteUserFromGroup } from '../../apis/groups'
import { getPostsByGroup, getPostsByTag } from '../../apis/posts'
import { getGroupsTags } from '../../apis/tags'
import Post from '../Post'
import CreatePost from '../CreatePost'

// get redux information by console.logging props.user, props.region and props.userGroups
function GroupPage (props) {
  const groupId = props.match.params.id
  const [group, setGroup] = useState([])
  const [members, setMembers] = useState([])
  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState('all')
  const [createPost, setCreatePost] = useState(false)

  const changeCreatePost = () => {
    setCreatePost(!createPost)
  }

  function isUserInGroup () {
    return members.find(member => member.id === props.user.id)
  }

  const getTags = () => {
    getGroupsTags(groupId)
      .then(tags => {
        setTags(tags)
        return null
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  const getPosts = (tagId) => {
    setCurrentTag(tagId)

    if (tagId) {
      getPostsByTag(tagId, groupId)
        .then((posts) => {
          setPosts(posts)
          getTags()
          return null
        })
        .catch(e => {
          console.log(e.message)
        })
    } else {
      getPostsByGroup(groupId)
        .then((posts) => {
          setPosts(posts)
          getTags()
          return null
        })
        .catch(e => {
          console.log(e.message)
        })
    }
  }

  useEffect(() => {
    getGroupById(groupId)
      .then(group => {
        setGroup(group)

        return null
      })
      .catch(e => {
        console.log(e.message)
      })

    getGroupMembers(groupId)
      .then((members) => {
        setMembers(members)
        return null
      })
      .catch(e => {
        console.log(e.message)
      })

    getPosts()
  }, [groupId])

  function handleClick (evt) {
    evt.preventDefault()
    if (!isUserInGroup()) {
      addUserToGroup(groupId, props.user)
        .then(() => {
          props.history.push('/whatshappening')
          return null
        })
        .catch(err => {
          console.log(err.message)
          return null
        })
    } else {
      deleteUserFromGroup(groupId, props.user)
        .then(() => {
          props.history.push('/whatshappening')
          return null
        })
        .catch(err => {
          console.log(err.message)
          return null
        })
    }
  }

  return (
    <>
      <div>
        <img className="w-full" src={`api/v1/images/group/${groupId}`} />
        <div className='px-8 py-4 flex sticky top-0 bg-white shadow-md justify-between items-center z-50'>
          <div className="flex items-center">
            <Link to='/whatshappening'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h2 className='text-4xl text-gray-700 font-semibold px-8'>{ group.name }</h2>
          </div>
          { isUserInGroup() ? <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl hover:text-white py-2 px-12 rounded' onClick={handleClick}>Leave Group</button> : <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xl hover:text-white py-2 px-12 rounded' onClick={handleClick}>Join Group</button> }
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className='px-8 py-4 flex flex-col sticky top-24 h-screen bg-white'>
            <h3 className="font-semibold text-xl text-gray-600 pb-4">Tags</h3>
            <div className="grid grid-cols-1 gap-4">
              <button key="all-tag" onClick={() => {
                getPosts()
              }} className={`${!currentTag ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-700'} hover:bg-blue-600  font-semibold hover:text-white w-full py-2 px-4 border border-blue-500 hover:border-transparent rounded`}>All Tags</button>
              {tags.length > 0 && tags.map((tag) =>
                <button key={tag.id} onClick={() => {
                  getPosts(tag.id)
                }} className={`${currentTag === tag.id ? 'bg-blue-500 text-white' : 'bg-transparent text-blue-700'} hover:bg-blue-600  font-semibold hover:text-white w-full py-2 px-4 border border-blue-500 hover:border-transparent rounded`}>{tag.tag}</button>
              )}
            </div>
          </div>
          <div className="col-span-2 px-8 py-4">
            <div className="flex justify-between contents-center pb-8">
              <h3 className="font-semibold text-2xl text-gray-600">Feed</h3>
              {!createPost && <button onClick={changeCreatePost} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg hover:text-white py-2 px-4 rounded'>Create Post</button>}
            </div>
            <div className="grid grid-cols-1 gap-8">
              {createPost && <CreatePost getPosts={getPosts} changeCreatePost={changeCreatePost} groupId={groupId} />}
              {posts.length > 0 && posts.map((post) =>
                <Post post={post} key={post.post_id} getPosts={getPosts}/>
              )}
            </div>
          </div>
          <div className='px-8 py-4 flex flex-col sticky top-24 h-screen bg-white'>
            <h3 className="font-semibold text-2xl text-gray-600 pb-4">Group Members</h3>
            <div className="bg-gray-50 p-4">
              {members.length > 0 && members.map((member) => <div key={member.id}>
                <h6>{member.first_name} {member.last_name}</h6>
              </div>)}
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
    user: state.user
  }
}

export default connect(mapStateToProps)(GroupPage)
