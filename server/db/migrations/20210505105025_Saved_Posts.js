
exports.up = function(knex) {
    return knex.schema.createTable('Saved_Posts', (table) => {
        table.integer('User_Id').primary()
        table.integer('Post_Id').primary()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Saved_Posts')
};
