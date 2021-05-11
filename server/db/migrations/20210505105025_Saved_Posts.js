exports.up = function (knex) {
  return knex.schema.createTable('saved_posts', (table) => {
    table.integer('post_id')
    table.integer('user_id')
    table.primary(['user_id', 'post_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('saved_posts')
}
