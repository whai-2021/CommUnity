function region (state = 'Auckland', action) {
  switch (action.type) {
    case 'SET_REGION':
      return action.region
    default:
      return state
  }
}

export default region
