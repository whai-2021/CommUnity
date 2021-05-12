exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, tag: 'Shopping' },
        { id: 2, tag: 'Food' },
        { id: 3, tag: 'General' }
      ])
    })
}
