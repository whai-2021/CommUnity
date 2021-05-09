exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('region').del()
    .then(function () {
      // Inserts seed entries
      return knex('region').insert([
        { id: 1, name: 'Auckland' },
        { id: 2, name: 'Wellington' },
        { id: 3, name: 'Christchurch' },
        { id: 4, name: 'Dunedin' }
      ])
    })
}
