const bcrypt = require('bcrypt')
const saltRounds = 10
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
      bcrypt.hash('caleb', saltRounds),
      bcrypt.hash('ysabel', saltRounds)
    ]
    ))
    .then(([calebHash, ysabelHash]) => {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', password_hash: calebHash, email: 'calebionpersonal@gmail.com' },
        { id: 2, last_name: 'Guiang', first_name: 'Ysabel', username: 'ysabel', password_hash: ysabelHash, email: 'yg@yahoo.com' }
      ])
    })
}
