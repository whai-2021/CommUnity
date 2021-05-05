
exports.up = function(knex) {
  return knex.schema.createTable('Groups', (table) => {
    table.increments('Id')
    table.string('Name')
    table.integer('Region_Id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Groups')
};
