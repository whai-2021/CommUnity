
exports.up = function(knex) {
    return knex.schema.createTable('Users', (table) => {
        table.increments('Id')
        table.string('Surname')
        table.string('Given_Name') 
        table.string('Username')
        table.binary('Password_Hash')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('Users')
};
