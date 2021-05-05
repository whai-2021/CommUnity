
exports.up = function(knex) {
    return knex.schema.createTable('Group_Members', (table) => {
    table.increments('Group_Id').primary()
    table.integer('User_Id')   
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Group_Members')
};
