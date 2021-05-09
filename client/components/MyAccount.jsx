import React from 'react'
import { NavLink } from 'react-router-dom'

import Footer from './Footer'

function MyAccount () {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <div className='w-2/3 flex flex-col shadow-lg rounded-lg overflow-hidden'>
          <div className='bg-gray-200 text-gray-700 text-lg px-6 py-4'>MY ACCOUNT</div>

          <div className='flex justify-between px-6 py-4'>
            <button className='bg-blue-300 px-2 py-1 rounded-full font-bold'>Groups</button>
            <button className='bg-blue-300 px-2 py-1 rounded-full font-bold'>Saved Posts</button>
          </div>

          <div className='px-6 py-4 border-t border-gray-200'>
            <div className='border rounded-lg p-4 bg-gray-200'>Apa Sherpa is from Nepal. He is looking to join a local community.</div>
          </div>

          <div className='bg-gray-200 px-6 py-4'>
            <NavLink to='/whatshappening'><button className='bg-blue-300 px-2 py-1 rounded-full font-bold'>Edit Info</button></NavLink>

            <div className='flex items-center pt-3'>
              <div className='font-bold bg-blue-300 flex justify-center items-center rounded-full w-12 h-12'>AS</div>
              <div className='ml-10 font-bold'>
                <p>first name: Apa</p>
                <p>last name: Sherpa</p>
                <p>email: apa.sherpa@loop.com</p>
                <p>password: Sherpa01</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyAccount
