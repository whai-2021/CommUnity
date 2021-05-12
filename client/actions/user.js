export function loginUser (user) {
  return {
    type: 'SET_USER',
    user: user
  }
}

export function logOutUser () {
  return {
    type: 'END_USER'
  }
}

export function setUser (user) {
  return dispatch => {
    dispatch(loginUser(user))
    return null
  }
}

export function deleteUser () {
  return dispatch => {
    dispatch(logOutUser())
    return null
  }
}
