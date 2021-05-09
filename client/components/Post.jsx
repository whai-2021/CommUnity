import React, { useEffect, useState } from 'react'

import { getPostTags } from '../apis/posts'

const Post = (props) => {
  const [tags, setTags] = useState([])

  const { id, body, created_at: createdAt, first_name: firstName, last_name: lastName } = props.post

  useEffect(() => {
    getPostTags(id)
      .then(res => {
        setTags(res)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  const createdAtDate = new Date(createdAt)

  return (
    <div className="w-full bg-white shadow-md rounded-md">
      <div className="p-8">
        <div className="flex">
          <h4 className="text-gray-700 text-lg font-semibold">{firstName + ' ' + lastName}</h4>
        </div>
        <div>
          <p className="text-sm text-gray-500">{createdAtDate.toString()}</p>
        </div>
        <div className="py-4">
          <p className="text-gray-600">{body}</p>
        </div>
        <div className="flex py-2">
          {tags.length > 0 && tags.map((tag) =>
            <div key={tag.id} className="rounded-full bg-blue-500 text-white px-4 py-2 mr-4">{tag.tag}</div>
          )}
        </div>
      </div>
      <img className="w-full" src="./images/race-shot.jpg" />
      <div className="px-8 py-4 flex justify-between">
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 cursor-pointer hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 cursor-pointer hover:text-gray-600 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
          </svg>
        </div>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Save Post</button>
      </div>
    </div>
  )
}

export default Post