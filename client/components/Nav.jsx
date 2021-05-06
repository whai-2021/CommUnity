import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {
  return (
    <>
      <div>
        <NavLink to='login'>Login</NavLink>
        <NavLink to='register'>Register</NavLink>
      </div>
    </>
  )
}

export default Nav
