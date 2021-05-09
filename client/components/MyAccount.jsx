import React from 'react'

function MyAccount () {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-2/3 flex flex-col shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-gray-200 text-gray-700 text-lg px-6 py-4'>MY ACCOUNT</div>

        <div className='flex justify-between px-6 py-4'>
          <button className='bg-blue-400 px-2 py-1 rounded-full'>Groups</button>
          <button className='bg-blue-400 px-2 py-1 rounded-full'>Saved Posts</button>
        </div>

        <div className='px-6 py-4 border-t border-gray-200'>
          <div>Something here..</div>
        </div>

        <div className='bg-gray-200'>
          <div>Edit Info</div>

          <div>
            <div>AS</div>
            <div>
              <p>first name: Apa</p>
              <p>last name: Sherpa</p>
              <p>email: apa.sherpa@loop.com</p>
              <p>password: Sherpa01</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MyAccount
