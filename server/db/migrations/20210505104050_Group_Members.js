exports.up = function (knex) {
  return knex.schema.createTable('group_members', (table) => {
    table.primary(['group_id', 'user_id'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('group_members')
}
