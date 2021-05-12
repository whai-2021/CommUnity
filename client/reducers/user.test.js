import user from './user'
import { loginUser, logOutUser } from '../actions/user'

describe('User Reducer', () => {
  test('sets initial state', () => {
    expect.assertions(1)
    const actual = user(undefined, {})
    const initialState = { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', email: 'calebionpersonal@gmail.com' }
    // change to equal false when auth set up again
    expect(actual).toEqual(initialState)
  })

  test('sets user', () => {
    expect.assertions(1)
    const newUser = { id: 2, name: 'James' }
    const state = { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', email: 'calebionpersonal@gmail.com' }
    const actual = user(state, loginUser(newUser))
    expect(actual).toEqual(newUser)
  })

  test('ends user', () => {
    expect.assertions(1)
    const state = { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', email: 'calebionpersonal@gmail.com' }
    const actual = user(state, logOutUser())
    expect(actual).toEqual(false)
  })
})
