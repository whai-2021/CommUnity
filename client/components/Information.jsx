import React from 'react'
import PageLinks from './PageLinks'
import { HashRouter as NavLink } from 'react-router-dom'

function Information () {
  return (
    <>
      <PageLinks/>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <NavLink to='/information/emergency' className='w-full h-32 sm:h-48 bg-gray-100 rounded-lg shadow-sm text-2xl font-semibold flex justify-center items-center hover:shadow-lg'>Emergency - SOS</NavLink>
        <NavLink to='/information/important' className='w-full h-32 sm:h-48 bg-gray-100 rounded-lg shadow-sm text-2xl font-semibold flex justify-center items-center hover:shadow-lg'>Important Info</NavLink>
        <NavLink to='/information/english' className='w-full h-32 sm:h-48 bg-gray-100 rounded-lg shadow-sm text-2xl font-semibold flex justify-center items-center hover:shadow-lg'>Learn English</NavLink>
        <NavLink to='/information/family' className='w-full h-32 sm:h-48 bg-gray-100 rounded-lg shadow-sm text-2xl font-semibold flex justify-center items-center hover:shadow-lg'>Family</NavLink>
        <NavLink to='/information/transport' className='w-full h-32 sm:h-48 bg-gray-100 rounded-lg shadow-sm text-2xl font-semibold flex justify-center items-center hover:shadow-lg'>Transport</NavLink>
        <NavLink to='/information/health' className='w-full h-32 sm:h-48 bg-gray-100 rounded-lg shadow-sm text-2xl font-semibold flex justify-center items-center hover:shadow-lg'>Health</NavLink>
      </div>
    </>
  )
}

export default Information
