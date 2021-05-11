exports.up = function (knex) {
  return knex.schema.createTable('votes', (table) => {
    table.increments('id').primary()
    table.integer('post_id')
    table.integer('author_id')
    table.string('vote_type')
    table.primary(['author_id', 'post_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('votes')
}
