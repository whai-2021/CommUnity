
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('post_images').insert([
        {post_id: 1, image: '78b4c4ff61b8b5f513bfab4d14563f1c'},
      ]);
    });
};
