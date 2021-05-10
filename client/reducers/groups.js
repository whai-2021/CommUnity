const initialState = [
  { id: 1, name: 'Apa Sherpa', region_id: 1, members: ['Caleb', 'Jatin', 'Dainy'] },
  { id: 2, name: 'Izzy Asper', region_id: 1, members: ['Caleb', 'Jatin', 'Dainy'] },
  { id: 3, name: 'Khaled Shaya', region_id: 1, members: ['Caleb', 'Jatin', 'Dainy'] }
]

// TEST ME - reducers are pretty much one of the easiest things to test

function userGroups (state = initialState, action) {
  switch (action.type) {
    case 'SET_GROUPS':
      return action.groups
    default:
      return state
  }
}

export default userGroups
