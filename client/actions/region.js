function changeRegion (region) {
  return {
    type: 'SET_REGION',
    region: region
  }
}

function findRegion (region) {
  switch (region) {
    case 'Auckland':
      return { id: 1, name: 'Auckland' }
    case 'Wellington':
      return { id: 2, name: 'Wellington' }
    case 'Christchurch':
      return { id: 3, name: 'Christchurch' }
    case 'Dunedin':
      return { id: 4, name: 'Dunedin' }
    default:
      return { id: 1, name: 'Auckland' }
  }
}

export function setRegion (region) {
  return (dispatch) => {
    dispatch(changeRegion(findRegion(region)))
    return null
  }
}
