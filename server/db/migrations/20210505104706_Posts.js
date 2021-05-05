
exports.up = function(knex) {
    return knex.schema.createTable('Posts', (table) => {
        table.increments('Id')
        table.integer('Author_Id')
        table.text('Body')
        table.timestamp('Created_At')  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Posts')
};
