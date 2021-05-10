// const initialState = { id: 2, last_name: 'Guiang', first_name: 'Ysabel', username: 'ysabel', email: 'yg@yahoo.com' }
const initialState = false
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
