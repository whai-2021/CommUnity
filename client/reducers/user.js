// deleted commented out code, and write tests
const initialState = { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', email: 'calebionpersonal@gmail.com' }

function user (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    case 'END_USER':
      return false
    default:
      return state
  }
}

export default user
