import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSavedPosts } from '../../apis/posts'
import Post from '../Post'
import PageLinks from '../PageLinks'

function SavedPosts (props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getSavedPosts(props.user.id)
      .then(result => {
        setPosts(result)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <>
      <PageLinks/>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-2 px-8 py-4">
          <div className="flex justify-between contents-center pb-8 justify-self-center">
            <h3 className="font-semibold text-2xl text-gray-600">Feed</h3>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {posts.length > 0 && posts.map((post) =>
              <Post post={post} key={post.id} getPosts=''/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SavedPosts)
