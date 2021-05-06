import React, { useState } from 'react'
import { registerUser } from '../apis/passportapi'

//might have to change to camelCase
const initialForm = {
  first_name: '',
  last_name: '',
  username: '',
  password_hash: '',
  email: ''
}

function Register (props) {
  const [ form, setForm ] = useState(initialForm)

  function handleChange (evt) {
    evt.preventDefault()
    setForm({ ...form,
    [evt.target.name]: evt.target.value})
  }

  function handleSumbit (evt) {
    evt.preventDefault()
    registerUser(form)
     .then(() => {
       setForm(initialForm)
       props.history.push('/')
     })
     .catch(err =>
      console.log('user not sent for registration'))
  }
  return (
    <div>hello</div>
  )
}

export default Register


