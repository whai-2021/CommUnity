exports.up = function (knex) {
  return knex.schema.createTable('groups', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('region_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('groups')
}
