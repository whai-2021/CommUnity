// false meaning that no user is logged in
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
