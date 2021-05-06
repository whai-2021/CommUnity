const express = require('express')
const router = express.Router()

const db = require('../db/util/users')

// GET all users
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET specific user
router.get('/:userId', (req, res) => {
  const userId = Number(req.params.id)

  db.getUserById(userId)
    .then(user => {
      res.json(user)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// DELETE user
router.delete('/:userId', (req, res) => {
  const userId = Number(req.params.id)
  console.log('line21', userId)
  db.deleteUser(userId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
