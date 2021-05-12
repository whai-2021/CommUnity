exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('post_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_tags').insert([
        { post_id: 1, tag_id: 1 },
        { post_id: 2, tag_id: 1 },
        { post_id: 6, tag_id: 1 },
        { post_id: 5, tag_id: 2 },
        { post_id: 1, tag_id: 3 },
        { post_id: 3, tag_id: 3 },
        { post_id: 4, tag_id: 3 },
        { post_id: 5, tag_id: 3 }
      ])
    })
}
