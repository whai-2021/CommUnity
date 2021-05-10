// look, I now it's a simple reducer, but not having tests looks badc, ok. You wanna look good don't you? Of course you do, Go on, be a hero, write a test or two
function region (state = { id: 1, name: 'Auckland' }, action) {
  switch (action.type) {
    case 'SET_REGION':
      return action.region
    default:
      return state
  }
}

export default region
