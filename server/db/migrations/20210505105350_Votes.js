
exports.up = function(knex) {
    return knex.schema.createTable('Votes', (table) => {
        table.increments('Id').primary()
        table.integer('Post_Id')  
        table.integer('Author_Id')
        table.boolean('Vote_Type')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Votes')
};
