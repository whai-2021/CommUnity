import React, { useState, useEffect } from 'react'
import { loginUser } from '../apis/passportapi'

// const initialForm = {
//   username: '',
//   password_hash: ''
// }

function SignIn () {
  // const [form, setForm] = useState(initialForm)
  return (
    <div className="signIn-page mt-5">
      <div>
        <h2 className="text-center text-3xl leading-9 font-extrabold">Sign In to your account</h2>
        <p className="text-center text-sm leading-5">
          Or
          <span className="text-blue-400 mx-2">
            Create an account
          </span>
        </p>
        <form>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="password">Password</label>
              <input type="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required />
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4 border border-transparent text-md leading-5 font-medium rounded-md text-white bg-blue-400 focus:outline-none focus:border-blue-400">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn

