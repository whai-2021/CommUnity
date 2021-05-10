exports.up = function (knex) {
  return knex.schema.createTable('saved_posts', (table) => {
    // I don't think this is how you make a composite primary key - checkout https://stackoverflow.com/questions/54968261/how-do-i-add-a-composite-primary-key-with-knex-js
    table.integer('user_id').primary()
    table.integer('post_id').primary()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('saved_posts')
}
