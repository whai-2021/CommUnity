exports.up = function (knex) {
  return knex.schema.createTable('group_images', (table) => {
    table.integer('group_id')
    table.text('image')
    table.primary(['group_id', 'image'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('group_images')
}
