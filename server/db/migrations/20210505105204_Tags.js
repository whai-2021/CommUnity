
exports.up = function(knex) {
    return knex.schema.createTable('Tags', (table) => {
        table.increments('Id').primary()
        table.integer('Post_Id') 
        table.string('Tag')  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('Tags')
};
