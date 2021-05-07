function region (state = 1, action) {
  switch (action.type) {
    case 'SET_REGION':
      return action.region
    default:
      return state
  }
}

export default region
