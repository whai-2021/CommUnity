import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IsAuthenticated, NotAuthenticated } from './Authentication'
import { connect } from 'react-redux'
import { logOffUser } from '../apis/passportapi'
import { deleteUser } from '../actions/user'

const Dropdown = ({ isOpen, toggle, dispatch }) => {
  function handleLogOff (evt) {
    evt.preventDefault()
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
        <Link to='signIn' className='pr-4 mt-8'>Login</Link>
        <Link to='register' className='pr-4'>Register</Link>
      </NotAuthenticated>
      <IsAuthenticated>
        <Link to='/myAccount' className='pr-4 mt-8'>My Account</Link>
        <NavLink to='/' className='pr-4' onClick={handleLogOff}>Log off div</NavLink>
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
