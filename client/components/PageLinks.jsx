import React from 'react'
import { NavLink } from 'react-router-dom'

// component to be imported into every component that needs it
function PageLinks () {
  return (
    <div className="container mx-auto sm">
      <div className="grid grid-cols-4 divide-x divide-black divide-opacity-100 content-center">
        <NavLink to='/newsfeed' className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans flex justify-center"><button>
            News Feed
        </button></NavLink>
        <NavLink to='/whatshappening' className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans flex justify-center"><button>
          Whats Happening
        </button></NavLink>
        <NavLink to='/information' className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans flex justify-center"><button>
          Information
        </button></NavLink>
        <NavLink to='/getsupport' className="bg-transparent hover:bg-gray-300 hover:text-gray-600 font-medium font-sans flex justify-center"><button>
          Get Support
        </button></NavLink>

      </div>
    </div>
  )
}

export default PageLinks
