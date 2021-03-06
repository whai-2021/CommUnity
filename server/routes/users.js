const express = require('express')
const router = express.Router()

const db = require('../db/util/users')

// If my author loved me, they would have written me some tests. I'll go stand in the corner and feel ashamed now.

router.patch('/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  const user = req.body
  db.updateUser(userId, user)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
