import request from 'supertest'

import
{ getGroups } from '../db/util/groups'

import server from '../server'

jest.mock('../db/util/groups', () => ({
  getGroups: jest.fn()
}))

describe('GET /api/v1/groups', () => {
  const fakeGroups = [{
    id: 5,
    author_id: 10,
    group_id: 15,
    body: 'I am testing'
  }]
  beforeAll(() => {
    getGroups.mockImplementation(() => {
      return Promise.resolve(fakeGroups)
    })
  })
  test('can GET groups', () => {
    expect.assertions(1)
    return request(server)
      .get('/api/v1/groups')
      .then(res => {
        expect(res.body).toEqual(fakeGroups)
        return null
      })
  })

  test('returns 500 if error', () => {
    getGroups.mockImplementation(() => Promise.reject(new Error('Oopsie')))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/groups')
      .then(res => {
        expect(res.status).toEqual(500)
        return null
      })
  })
})
