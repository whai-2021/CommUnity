import React from 'react'

function MyAccount () {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        <img className="rounded-full h-40 w-40 flex" src="/images/logo.png" alt="user profile photo" />
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4 mt-5">Apa Sherpa</p>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
