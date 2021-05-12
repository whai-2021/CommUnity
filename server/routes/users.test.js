import request from 'supertest'
import server from '../server'
import { updateUser} from '../db/util/users'

jest.mock('../db/util/users', () => ({
  updateUser: jest.fn()
}))

describe('PATCH /', () => {
  const fakeUser = {
    id: 12,
    last_name: 'Sung',
    first_name: 'Sam',
    username: 'samsung',
    email: 'sam@yahoo.com'
  }

  beforeAll(() => {
    updateUser.mockImplementation(() => {
      return Promise.resolve()
    })
  })
  test('update user', () => {
    expect.assertions(1)
    return request(server)
      .patch('/api/v1/users/12')
      .send(fakeUser)
      .then(res => {
        expect(res.status).toEqual(200)
        return null
      })
  })
})
