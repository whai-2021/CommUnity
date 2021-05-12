exports.up = function (knex) {
  return knex.schema.createTable('post_images', (table) => {
    table.integer('post_id')
    table.text('image')
    table.primary(['post_id', 'image'])
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('post_images')
}
