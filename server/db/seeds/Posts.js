exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, author_id: 1, group_id: 1, body: 'Warehouse Stationary is having a sale on back to school Products!', created_at: new Date(Date.now()) }
      ])
    })
}
