const express = require('express')
const router = express.Router()

const db = require('../db/util/users')

// GET all users
// DELETE user

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

module.exports = router
