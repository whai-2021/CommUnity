import { useEffect, useState } from 'react'
import { getUser } from '../apis/passportapi'

export function IsAuthenticated ({ children }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    getUser()
      .then(result => {
        setUser(result)
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [])

  return user ? children : null
}
export function NotAuthenticated ({ children }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    getUser()
      .then(result => {
        setUser(result)
        return null
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  }, [])

  return !user ? children : null
}
