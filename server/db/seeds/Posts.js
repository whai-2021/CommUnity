exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        { id: 1, author_id: 1, group_id: 1, body: 'Warehouse Stationary is having a sale on back to school Products!', created_at: new Date(Date.now()) },
        { id: 2, author_id: 2, group_id: 1, body: 'Bunnings Botany has Monsteras for sale!', created_at: new Date(Date.now()) },
        { id: 3, author_id: 3, group_id: 1, body: 'Avoid the State Highway 1 Motorway on weekday mornings, traffic is horrible.', created_at: new Date(Date.now()) },
        { id: 4, author_id: 4, group_id: 1, body: "There's a new daycare opening in Howick next week.", created_at: new Date(Date.now()) },
        { id: 5, author_id: 5, group_id: 1, body: 'Paradise in Mt Eden has some great Indian Food!', created_at: new Date(Date.now()) },
        { id: 6, author_id: 3, group_id: 1, body: 'For all the makeup lovers out there, Sylvia Park now has Sephora!', created_at: new Date(Date.now()) }

      ])
    })
}
