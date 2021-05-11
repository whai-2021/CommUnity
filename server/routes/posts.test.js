import request from 'supertest'

import
{ getPosts } from '../db/util/posts'

import server from '../server'

jest.mock('../db/util/posts', () => ({
  getPosts: jest.fn()
}))

describe('GET /api/v1/posts', () => {
  const fakePosts = [{
    id: 5,
    author_id: 10,
    group_id: 15,
    body: 'I am testing'
  }]
  beforeAll(() => {
    getPosts.mockImplementation(() => {
      return Promise.resolve(fakePosts)
    })
  })
  test('can GET posts', () => {
    expect.assertions(1)
    return request(server)
      .get('/api/v1/posts')
      .then(res => {
        expect(res.body).toEqual(fakePosts)
        return null
      })
  })

  test('returns 500 if error', () => {
    getPosts.mockImplementation(() => Promise.reject(new Error('Oopsie')))
    expect.assertions(1)
    return request(server)
      .get('/api/v1/posts')
      .then(res => {
        expect(res.status).toEqual(500)
        return null
      })
  })
})
