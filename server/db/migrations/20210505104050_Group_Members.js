exports.up = function (knex) {
  return knex.schema.createTable('group_members', (table) => {
    table.integer('group_id')
    table.integer('user_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('group_members')
}
