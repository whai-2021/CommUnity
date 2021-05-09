import React, { useState } from 'react'
import { loginUser } from '../../apis/passportapi'

const initialForm = {
  username: '',
  password_hash: ''
}

function SignIn (props) {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  function handleChange (evt) {
    evt.preventDefault()
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    })
  }

  function handleSumbit (evt) {
    evt.preventDefault()
    loginUser(form)
      .then((result) => {
        setForm(initialForm)
        if (result === 'Successfully Authenticated') {
          // need to save user to redux state
          props.history.push('/')
        } else {
          setError(result)
        }
        return null
      })
      .catch(err =>
        console.log('user not sent for registration' + err.message))
  }
  return (
    <div className="signIn-page mt-24 flex flex-col">
      <div>
        <h2 className="text-center text-3xl leading-9 font-extrabold">Sign In to your account</h2>
        <p className="text-center text-sm leading-5">
          Or
          <span className="text-blue-400 mx-2">
            Create an account
          </span>
        </p>
        {error && <h3 className="text-center text-red-700">Error: {error}</h3>}
        <form onSubmit={handleSumbit}>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="username">username</label>
              <input type="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='username' onChange={handleChange} value={form.username} />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-blue-400 text-xs font-bold mb-2" htmlFor="password">Password</label>
              <input type="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-400" required name='password_hash' onChange={handleChange} value={form.password_hash} />
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
