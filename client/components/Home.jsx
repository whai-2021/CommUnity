import React, { useState } from 'react'

function Home () {
  const [form, setForm] = useState('')

  function handleClick (evt) {
    setForm(evt.target.value)
    
  }

  return (
    <>
      <div className='flex items-center justify-center py-40 -mt-28 text-7xl container mx-auto'><h1 className='pr-8'>I Live in ... </h1>
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
