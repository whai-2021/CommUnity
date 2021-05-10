const db = require('./posts')

const knex = require('knex')
const testConfig = require('../knexfile').test

const { getPosts } = require('./posts')

const testDb = knex(testConfig)

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

test('can return all posts', () => {
  expect.assertions(1)
  return getPosts(testDb)
    .then(posts => {
      expect(posts).toHaveLength(1)
      return null
    })
})
