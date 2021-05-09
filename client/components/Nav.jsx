import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
  return (
    <>
      <header className='bg-blue-400 font-sans flex flex-col items-center'>
        <div className='w-full px-3 py-2'>
          <div className='flex items-center justify-between'>
            <NavLink to='/'><img className='rounded-full w-10 h-10' width='100' src='/images/OnlyLogo.png' /></NavLink>
            <NavLink to='signIn' className='tracking-wide pr-8'>Login</NavLink>
            {/* <NavLink to='register' className='tracking-wide'>Register</NavLink> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav
