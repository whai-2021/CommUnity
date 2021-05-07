import React from 'react'

function MyAccount () {
  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        <img className="rounded-full h-40 w-40 flex" src="/images/logo.png" alt="user profile photo" />
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex items-center">
          <p className="text-xl mr-4 mt-5">First Name: Apa</p>
        </div>
        <div className="container flex items-center">
          <p className="text-xl mr-4 mt-5">Last Name: Sherpa</p>
        </div>
        <div className="container flex items-center">
          <p className="text-xl mr-4 mt-5">Email: apa.sherpa@gmail.com</p>
        </div>
        <div className="container flex items-center">
          <p className="text-xl mr-4 mt-5">Password: Sherpa01 </p>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
