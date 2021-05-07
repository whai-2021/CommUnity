import React from 'react'

function Header () {
  return (
    <header className="h-16 bg-white mb-16 flex flex-col">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer w-full">
            <img className='resize rounded-md' width='80' src='/images/Logo(invisible).png' />
          </div>
        </div>
      </div>
      <div className="text-blue-400 text-center flex flex-column items-center align-items">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </div>
    </header>
  )
}

export default Header
