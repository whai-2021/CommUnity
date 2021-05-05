
exports.up = function(knex) {
    return knex.schema.createTable('Saved_Posts', (table) => {
        table.integer('User_Id')
        table.increments('Post_Id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Saved_Posts')
};
