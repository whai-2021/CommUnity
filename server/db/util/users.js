const database = require('../connection')

const getUsers = (db = database) => {
  return db('users').select()
}

const userExists = (username, db = database) => {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

const getUserById = (id, db = database) => {
  return db('users').where('id', id).select().first()
}

const getUserByUsername = (username, db = database) => {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

const addUser = (user, db = database) => {
  return db('users').insert(user)
    .then((id) => getUserById(id[0]))
}

// update user

const deleteUser = (id, db = database) => {
  return db('users').where('id', id).delete()
}


module.exports = {
  getUsers,
  userExists,
  getUserById,
  getUserByUsername,
  addUser,
  deleteUser
}
