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

// DELETE user
router.delete('/userId', (req, res) => {
  const userId = req.params.id
  db.deleteUser(userId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
