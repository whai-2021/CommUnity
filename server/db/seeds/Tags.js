exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, tag: 'Caleb', post_id: 1 }
      ])
    })
}
