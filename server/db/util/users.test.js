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