exports.up = function (knex) {
  return knex.schema.createTable('post_tags', (table) => {
    table.integer('post_id')
    table.integer('tag_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('post_tags')
}
