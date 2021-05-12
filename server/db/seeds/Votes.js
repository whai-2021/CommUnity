exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        { vote_type: 'upVote', post_id: 1, author_id: 1 }
      ])
    })
}
