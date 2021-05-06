const db = require('./users')

const knex = require('knex')
const testConfig = require('../knexfile').test

const testDb = knex(testConfig)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

// getUsers
test('can get all users', () => {
  const expected = 2
  return db.getUsers(testDb)
    .then(users => {
      return expect(users).toHaveLength(expected)
    })
    .catch(err => expect(err).toBeNull())
})

// deleteUser
test('can delete a user', () => {
  const expected = 0
  const id = 2
  return db.deleteUser(id, testDb)
    .then(() => {
      // eslint-disable-next-line promise/no-nesting
      return db.getUserById(id, testDb)
        .then(user => {
          return expect(user).toBeFalsy
        })
    })
    .catch(err => expect(err).toBeNull())
})
