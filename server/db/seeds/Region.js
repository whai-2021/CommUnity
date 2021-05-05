
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Region').del()
    .then(function () {
      // Inserts seed entries
      return knex('Region').insert([
        {Group_Id: 1, User_Id: 1}
      ]);
    });
};
