import regionReducer from './region'
import { changeRegion } from '../actions/region'

describe('Region Reducer', () => {
  test('sets initial region', () => {
    expect.assertions(1)
    const initialState = { id: 1, name: 'Auckland' }
    const actual = regionReducer(undefined, {})
    expect(actual).toEqual(initialState)
  })
  test('sets new region', () => {
    expect.assertions(1)
    const newRegion = { id: 2, name: 'Wellington' }
    const actual = regionReducer(undefined, changeRegion(newRegion))
    expect(actual).toEqual(newRegion)
  })
})
