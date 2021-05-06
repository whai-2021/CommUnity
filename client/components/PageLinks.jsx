import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// component to be imported into every component that needs it
function PageLinks () {
  return (
    <div className="container mx-auto sm">
      <div className="grid grid-cols-4 divide-x divide-black divide-opacity-100 content-center">
        <button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans" as={ Link } to='/newsfeed'>
            News Feed
        </button>
        <button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans" as={ Link } to='/whatshappening'>
          Whats Happening
        </button>
        <button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans" as={ NavLink } to='/information'>
          Information
        </button>
        <button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans" as={ NavLink } to='/getsupport'>
          Get Support
        </button>

      </div>
    </div>
  )
}

export default PageLinks
