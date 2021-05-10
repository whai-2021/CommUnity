exports.up = function (knex) {
  return knex.schema.createTable('saved_posts', (table) => {
    table.integer('user_id')
    table.integer('post_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('saved_posts')
}
