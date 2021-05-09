import React from 'react'
import { NavLink } from 'react-router-dom'

import Footer from './Footer'

function PageLinks () {
  return (
    <div>
      <div className='flex justify-between ml-12 mr-12 px-2 py-2'>
        <NavLink to='/newsfeed'><button className=''>News Feed</button></NavLink>
        <NavLink to='/whatshappening'><button className=''>Whats Happening</button></NavLink>
        <NavLink to='/information'><button className=''>Information</button></NavLink>
        <NavLink to='/getsupport'><button className=''>Get Support</button></NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default PageLinks
