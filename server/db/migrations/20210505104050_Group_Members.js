exports.up = function (knex) {
  return knex.schema.createTable('group_members', (table) => {
    table.integer('group_id').primary()
    table.integer('user_id').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('group_members')
}
