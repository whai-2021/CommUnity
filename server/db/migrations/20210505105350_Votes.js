exports.up = function (knex) {
  return knex.schema.createTable('votes', (table) => {
    table.increments('id').primary()
    table.integer('post_id')
    table.integer('author_id')
    table.boolean('vote_type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('votes')
}
