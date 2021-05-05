exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', password_hash: '', email: 'calebionpersonal@gmail.com' }
      ])
    })
}
