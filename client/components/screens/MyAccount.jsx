import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsersGroups } from '../../apis/groups'
import { updateUser } from '../../apis/users'
import { setUser } from '../../actions/user'
import PageLinks from '../PageLinks'

import Footer from '../Footer'

function MyAccount (props) {
  const { id, first_name: firstName, last_name: lastName, email } = props.user
  const initialForm = { firstName: firstName, lastName: lastName, email: email }
  const [groups, setGroups] = useState([])
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    getUsersGroups(id)
      .then(result => {
        setGroups(result)
        return null
      })
      .catch(err => console.log(err.message))
  }, [])

  function showGroups () {
    return groups.map(group => <div className='px-6 py-4 border-t border-gray-200' key={group.id}>
      <Link to={'/whatshappening/' + group.id}><div className='border rounded-lg p-4 bg-gray-200 font-medium hover:bg-gray-300 hover:shadow-md'>{group.name}</div></Link>
    </div>
    )
  }

  const splitFirstName = firstName.split('')
  const splitLastName = lastName.split('')
  const initials = splitFirstName[0] + splitLastName[0]

  function handleChange (event) {
    event.preventDefault()
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    updateUser(id, form)
      .then(() => {
        const newDetails = { ...props.user, first_name: form.firstName, last_name: form.lastName, email: form.email }
        return props.dispatch(setUser(newDetails))
      })
      .then(() => {
        setForm(initialForm)
        return null
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      <PageLinks currentPage="account" />
      <div className='flex justify-center items-center mt-12'>
        <div className='w-2/3 flex flex-col shadow-lg rounded-lg overflow-hidden'>
          <div className='bg-gray-200 text-gray-700 text-lg px-6 py-4'>MY ACCOUNT</div>

          <div className='flex justify-between px-6 py-4'>
            <NavLink to='/whatshappening'><button className='bg-blue-300 px-2 py-1 rounded-full font-bold'>Groups</button></NavLink>
            <NavLink to='/savedposts'><button className='bg-blue-300 px-2 py-1 rounded-full font-bold'>Saved Posts</button></NavLink>
          </div>

          <div className='flex items-center pt-3 mb-5 pl-8 mt-8'>
            <div className='font-bold bg-blue-300 flex justify-center items-center rounded-full w-12 h-12'>{initials}</div>
            <div className='ml-10 font-bold'>
              <p>First Name: <span className='text-blue-500 font-sans'>{firstName}</span></p>
              <p>Last Name: <span className='text-blue-500 font-sans'>{lastName}</span></p>
              <p>Email: <span className='text-blue-500 font-sans'>{email}</span></p>
            </div>
          </div>

          {showGroups()}

          <div className='flex flex-col shadow-lg rounded-lg overflow-hidden mt-8'>
            <div className='bg-gray-200 px-6 py-4'>
              <button className='bg-blue-300 px-2 py-1 rounded-full font-bold'>Edit Info</button>
            </div>

            <div className='px-8 py-6'>
              <label className="block font-semibold">First Name</label>
              <input type="text" placeholder="name" name="firstName" value={form.firstName} onChange={handleChange} className='border w-full h-5 px-3 py-5 rounded-md focus:outline-none focus:ring-blue-300'/>
              <label className="block font-semibold">Last Name</label>
              <input type="text" placeholder="name" name="lastName" value={form.lastName} onChange={handleChange} className='border w-full h-5 px-3 py-5 rounded-md focus:outline-none focus:ring-blue-300'/>
              <label className="block font-semibold">Email</label>
              <input type="text" placeholder="email" name="email" value={form.email} onChange={handleChange} className='border w-full h-5 px-3 py-5 rounded-md focus:outline-none focus:ring-blue-300'/>
            </div>

            <div className='flex items-center w-100 border-t p-3'>
              <button className='bg-blue-300 px-3 py-1 rounded text-white mr-1'>Cancel</button>
              <button onClick={handleSubmit} className='bg-blue-300 px-3 py-1 rounded text-white'>Save</button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(MyAccount)
