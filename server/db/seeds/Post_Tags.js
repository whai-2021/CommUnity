exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('post_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_tags').insert([
        { post_id: 1, tag_id: 1 }
      ])
    })
}
