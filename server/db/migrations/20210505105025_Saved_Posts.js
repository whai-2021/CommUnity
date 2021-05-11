exports.up = function (knex) {
  return knex.schema.createTable('saved_posts', (table) => {
    table.primary(['user_id', 'post_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('saved_posts')
}
