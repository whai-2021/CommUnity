exports.up = function (knex) {
  return knex.schema.createTable('post_tags', (table) => {
    table.integer('post_id')
    table.integer('tag_id')
    table.primary(['post_id', 'tag_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('post_tags')
}
