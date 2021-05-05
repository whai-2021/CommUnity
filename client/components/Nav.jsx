import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
  return (
    <>
      <header className='flex flex-wrap items-center justify-between p-5'>
        <div className='flex justify-between'>
          <img className='resize rounded-md' width='120' src='/images/Logo.png' />
        </div>
        <div className='flex ml-24 text-right justify-end w-auto px-4 py-2'>
          <NavLink to='login' className='ml-3 text-3xl'>Login </NavLink>
          <NavLink to='register' className='ml-3 text-3xl'>Register</NavLink>
        </div>
      </header>
    </>
  )
}

export default Nav
