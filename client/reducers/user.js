// deleted commented out code, and write tests
function user (state = false, action) {
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
