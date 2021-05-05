
exports.up = function(knex) {
    return knex.schema.createTable('Group_Members', (table) => {
    table.integer('Group_Id').primary()
    table.integer('User_Id').primary()   
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Group_Members')
};
