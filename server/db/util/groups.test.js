const db = require('./groups')

const knex = require('knex')
const testConfig = require('../knexfile').test

const testDb = knex(testConfig)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

test('can get all groups', () => {
  const expected = 3
  return db.getGroups(testDb)
    .then(groups => {
      return expect(groups).toHaveLength(expected)
    })
})
