const express = require('express')
const router = express.Router()

const db = require('../db/util/groups')

// GET groups that user is apart of
// PUT user joins group (Add user to a group)
// GET members of a group
// DELETE user leaves group
// DELETE group
//

// GET all groups
router.get('/', (req,res) => {
  db.getGroups()
    .then(groups => {
      res.json(groups)
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

module.exports = router
