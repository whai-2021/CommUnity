
exports.up = function(knex) {
    return knex.schema.createTable('Region', (table) => {
        table.increments('Id')
        table.string('Region_Name')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('Region')
};
