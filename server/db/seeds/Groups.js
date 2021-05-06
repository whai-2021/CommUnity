exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        { id: 1, name: 'Apa Sherpa', region_id: 1 },
        { id: 2, name: 'Izzy Asper', region_id: 1 },
        { id: 3, name: 'Khaled Shaya', region_id: 1 }
      ])
    })
}
