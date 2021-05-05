exports.up = function (knex) {
  return knex.schema.createTable('tags', (table) => {
    table.increments('id').primary()
    table.integer('post_id')
    table.string('tag')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tags')
}
