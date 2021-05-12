
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('group_images').del()
    .then(function () {
      // Inserts seed entries
      return knex('group_images').insert([
        {group_id: 1, image: '78b4c4ff61b8b5f513bfab4d14563f1c'},
      ]);
    });
};
