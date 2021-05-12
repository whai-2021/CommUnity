import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function PageLinks (props) {
  const [currentPage, setCurrentPage] = useState('')

  useEffect(() => {
    setCurrentPage(props.currentPage)
  },[props.currentPage])

  return (
    <div className="w-screen">
      <div className='flex flex-wrap justify-center py-2'>
        <NavLink className="mx-2 lg:mx-16" to='/newsfeed'><button className={`${currentPage === 'news' ? 'bg-blue-500 text-white' : 'bg-transparent border border-blue-500 text-blue-700'} hover:bg-blue-600 hover:text-white font-semibold mt-2 px-4 py-2 rounded-full focus:outline-none`} >News Feed</button></NavLink>
        <NavLink className="mx-2 lg:mx-16" to='/whatshappening'><button className={`${currentPage === 'whatshappening' ? 'bg-blue-500 text-white' : 'bg-transparent border border-blue-500 text-blue-700'} hover:bg-blue-600 hover:text-white font-semibold mt-2 px-4 py-2 rounded-full focus:outline-none`}>Whats Happening</button></NavLink>
        <NavLink className="mx-2 lg:mx-16" to='/information'><button className={`${currentPage === 'info' ? 'bg-blue-500 text-white' : 'bg-transparent border border-blue-500 text-blue-700'} hover:bg-blue-600 hover:text-white font-semibold mt-2 px-4 py-2 rounded-full focus:outline-none`}>Information</button></NavLink>
        <NavLink className="mx-2 lg:mx-16" to='/getsupport'><button className={`${currentPage === 'support' ? 'bg-blue-500 text-white' : 'bg-transparent border border-blue-500 text-blue-700'} hover:bg-blue-600 hover:text-white font-semibold mt-2 px-4 py-2 rounded-full focus:outline-none`}>Get Support</button></NavLink>
      </div>
    </div>
  )
}

export default PageLinks
 