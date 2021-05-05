exports.up = function (knex) {
  return knex.schema.createTable('saved_posts', (table) => {
    table.integer('user_id').primary()
    table.integer('post_id').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('saved_posts')
}
