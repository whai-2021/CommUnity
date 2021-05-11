import React from 'react'
import { NavLink } from 'react-router-dom'
import { IsAuthenticated, NotAuthenticated } from './Authentication'
import { connect } from 'react-redux'
import { logOffUser } from '../apis/passportapi'
import { deleteUser } from '../actions/user'

const Dropdown = ({ isOpen, toggle, dispatch }) => {
  function handleLogOff () {
    logOffUser()
      .then((res) => {
        console.log(res)
        dispatch(deleteUser())
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-blue-300'
          : 'hidden'
      }
      onClick={toggle}
    >
      <NotAuthenticated>
        <NavLink to='signIn' className='pr-4 mt-8'>Login</NavLink>
        <NavLink to='register' className='pr-4'>Register</NavLink>
      </NotAuthenticated>
      <IsAuthenticated>
        <NavLink to='/myAccount' className='pr-4 mt-8'>My Account</NavLink>
        <NavLink to='/' className='pr-4' onClick={handleLogOff}>Log off</NavLink>
      </IsAuthenticated>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dropdown)
