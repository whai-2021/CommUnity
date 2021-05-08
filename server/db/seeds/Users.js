const bcrypt = require('bcrypt')
const saltRounds = 10
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([
      bcrypt.hash('caleb', saltRounds),
      bcrypt.hash('ysabel', saltRounds),
      bcrypt.hash('dainy', saltRounds),
      bcrypt.hash('jatin', saltRounds)
    ]
    ))
    .then(([calebHash, ysabelHash, dainyHash, jatinHash]) => {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, last_name: 'Ion', first_name: 'Caleb', username: 'calebhino', password_hash: calebHash, email: 'calebionpersonal@gmail.com' },
        { id: 2, last_name: 'Guiang', first_name: 'Ysabel', username: 'ysabel', password_hash: ysabelHash, email: 'yg@yahoo.com' },
        { id: 3, last_name: 'Leen', first_name: 'Dainy', username: 'dainy', password_hash: dainyHash, email: 'dai@yahoo.com' },
        { id: 4, last_name: 'Puri', first_name: 'Jatin', username: 'jatin', password_hash: jatinHash, email: 'jatin@yahoo.com' }
      ])
    })
}
