
exports.up = function(knex) {
    return knex.schema.createTable('Votes', (table) => {
        table.increments('Id')
        table.integer('Post_Id')  
        table.integer('Author_Id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Votes')
};
