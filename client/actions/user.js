function loginUser (user) {
  return {
    type: 'SET_USER',
    user: user
  }
}

export function setUser (user) {
  return dispatch => {
    dispatch(loginUser(user))
    return null
  }
}
