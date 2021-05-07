import React from 'react'
import { NavLink } from 'react-router-dom'

// NavLinks mess up css. Fix later
function PageLinks () {
  return (
    <div className="container mx-auto sm">
      <div className="grid grid-cols-4 divide-x divide-black divide-opacity-100 content-center">
        <NavLink to='/newsfeed'><button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans">
            News Feed
        </button></NavLink>
        <NavLink to='/whatshappening'><button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans">
          Whats Happening
        </button></NavLink>
        <NavLink to='/information'><button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans">
          Information
        </button></NavLink>
        <NavLink to='/getsupport'><button className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans">
          Get Support
        </button></NavLink>

      </div>
    </div>
  )
}

export default PageLinks
