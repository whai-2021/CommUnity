import React, { useState } from 'react'
import { createPost } from '../apis/posts'

const CreatePost = (props) => {
  const [post, setPost] = useState({
    body: '',
    image: ''
  })
  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState('')
  const { changeCreatePost, groupId, getPosts } = props

  const handleSubmit = () => {
    createPost(post, tags)
    getPosts()
    changeCreatePost()
  }

  const addTag = (e) => {
    const { value } = e.target
    if (e.key === 'Enter' && !tags.includes(value)) {
      setTags([
        ...tags,
        value
      ])
      setCurrentTag('')
    }
  }

  const deleteTag = (tag) => {
    setTags(tags.filter((res) => tag !== res))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'tags') {
      setCurrentTag(value)
    } else {
      setPost({
        ...post,
        [name]: value,
        createdAt: Date.now(),
        userId: 1,
        groupId
      })
    }
  }

  return (
    <div className="w-full bg-white shadow-lg rounded p-8">
      <h4 className="font-semibold text-2xl text-gray-700 pb-4">Create Post</h4>
      <textarea className="text-lg border w-full block h-64 border-gray-300 active:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 py-2 px-4 rounded-md shadow-sm" name="body" onChange={handleChange} value={post.body} />
      {tags.length > 0 && <div className="flex w-full pt-4">
        {tags.map(tag =>
          <div key={tag} className="rounded-full bg-blue-500 text-white px-4 py-2 flex">
            {tag}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4 text-white cursor-pointer" onClick={() => deleteTag(tag)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
      </div>}
      <input className="mt-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" placeholder="tags" name="tags" onChange={handleChange} onKeyDown={addTag} value={currentTag}/>
      <div className="flex w-full justify-end pt-4">
        <button onClick={changeCreatePost} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>Cancel</button>
        <button className="py-2 px-6 bg-blue-500 shadow-sm hover:bg-blue-600 text-white rounded-md ml-4" onClick={handleSubmit}>Post</button>
      </div>
    </div>
  )
}

export default CreatePost
