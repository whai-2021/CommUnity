import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-blue-300'
          : 'hidden'
      }
      onClick={toggle}
    >
      <NavLink to='signIn' className='pr-4 mt-8'>Login</NavLink>
      <NavLink to='register' className='pr-4'>Register</NavLink>
    </div>
  )
}

export default Dropdown
