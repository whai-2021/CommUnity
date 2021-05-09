import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Home () {
  const [form, setForm] = useState('')

  function handleClick (evt) {
    setForm(evt.target.value)
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        <NavLink to='/'><img className='resize rounded-md' width='300' src='/images/Logo(invisible).png' /></NavLink>
      </div>
      <div className='lg:text-7xl md:text-5xl sm:text-3xl flex items-center justify-center py-40 -mt-28 text-7xl container mx-auto'><h1 className='pr-8'>I Live in ... </h1>
        <select className="border border-gray-300 rounded-full text-gray-600 text-4xl bg-white hover:border-gray-400 focus:outline-none appearance-none" name='location' onChange={handleClick}>
          <option>Choose your location</option>
          <option value='Auckland'>Auckland</option>
          <option value='Wellington'>Wellington</option>
          <option value='Christchurch'>Christchurch</option>
          <option value='Dunedin'>Dunedin</option>
        </select>
      </div>
    </>
  )
}

export default Home
