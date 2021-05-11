function loginUser (user) {
  return {
    type: 'SET_USER',
    user: user
  }
}

function logOutUser () {
  return {
    type: 'SET_USER',
    user: false
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
