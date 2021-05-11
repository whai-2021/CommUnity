const database = require('../connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

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
  return bcrypt.hash(user.password_hash, saltRounds)
    .then(result => {
      user.password_hash = result
      // eslint-disable-next-line promise/no-nesting
      return db('users')
        .insert(user)
        .then((id) => getUserById(id[0]))
    })
    .catch(err =>
      console.log(err.message))
}

const updateUser = (id, user, db = database) => {
  return db('users')
    .where('id', id)
    .update({ first_name: user.first_name, last_name: user.last_name, email: user.email })
}

const deleteUser = (id, db = database) => {
  return db('users').where('id', id).delete()
}

module.exports = {
  getUsers,
  userExists,
  getUserById,
  getUserByUsername,
  addUser,
  updateUser,
  deleteUser
}
