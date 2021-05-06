import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
  return (
    <>
      <header className='flex flex-wrap p-5'>
        <div className='hero container max-w-screen-lg mx-auto pb-10 flex justify-center pl-52'>
          <NavLink to='/'><img className='resize rounded-md' width='300' src='/images/Logo(invisible).png' /></NavLink>
        </div>
        <div className='text-right object-right-top pr-4 py-2'>
          <NavLink to='signIn' className='ml-2 text-2xl uppercase tracking-wide text-blue-400 font-bold mb-2'>Login</NavLink>
          <NavLink to='register' className='ml-7 text-2xl uppercase tracking-wide text-blue-400 font-bold mb-2'>Register</NavLink>
        </div>
      </header>
    </>
  )
}

export default Nav
