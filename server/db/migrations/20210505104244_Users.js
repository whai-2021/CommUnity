exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('last_name')
    table.string('first_name')
    table.string('username')
    table.binary('password_hash')
    table.string('email')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
