exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { group_id: 1, user_id: 2 },
        { group_id: 1, user_id: 3 },
        { group_id: 1, user_id: 4 },
        { group_id: 2, user_id: 1 },
        { group_id: 2, user_id: 2 },
        { group_id: 2, user_id: 3 },
        { group_id: 2, user_id: 4 },
        { group_id: 3, user_id: 4 },
        { group_id: 3, user_id: 3 },
        { group_id: 4, user_id: 1 },
        { group_id: 4, user_id: 2 },
        { group_id: 4, user_id: 3 },
        { group_id: 4, user_id: 4 },
        { group_id: 5, user_id: 2 },
        { group_id: 5, user_id: 3 },
        { group_id: 6, user_id: 1 },
        { group_id: 6, user_id: 4 },
        { group_id: 7, user_id: 1 },
        { group_id: 7, user_id: 2 },
        { group_id: 8, user_id: 3 },
        { group_id: 8, user_id: 4 },
        { group_id: 9, user_id: 1 },
        { group_id: 9, user_id: 4 },
        { group_id: 9, user_id: 3 },
        { group_id: 10, user_id: 2 },
        { group_id: 10, user_id: 3 },
        { group_id: 10, user_id: 1 },
        { group_id: 11, user_id: 2 },
        { group_id: 11, user_id: 3 },
        { group_id: 12, user_id: 4 },
        { group_id: 12, user_id: 1 },
        { group_id: 13, user_id: 1 },
        { group_id: 13, user_id: 2 },
        { group_id: 14, user_id: 3 },
        { group_id: 14, user_id: 1 },
        { group_id: 15, user_id: 4 },
        { group_id: 15, user_id: 5 }
      ])
    })
}
