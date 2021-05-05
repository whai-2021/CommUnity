exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id')
    table.integer('author_id')
    table.integer('group_id')
    table.text('body')
    table.timestamp('created_at')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('posts')
}
