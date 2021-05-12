exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        { id: 1, vote_type: 'upVote', post_id: 1, author_id: 1 },
        { id: 2, vote_type: 'upVote', post_id: 1, author_id: 1 },
        { id: 3, vote_type: 'upVote', post_id: 1, author_id: 1 },
        { id: 1, vote_type: 'upVote', post_id: 1, author_id: 1 },
        { id: 1, vote_type: 'upVote', post_id: 1, author_id: 1 },
      ])
    })
}
