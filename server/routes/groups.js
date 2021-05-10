const express = require('express')
const router = express.Router()

const db = require('../db/util/groups')


// Where forart though my sweet router tests, my soul is a pale shadow of itself without thee

// GET all groups and get User groups
router.get('/', (req, res) => {
  const userId = Number(req.query.userId)

  // this feels like it should be two separate routes, one which takes a userId and one which doesn't
  if (userId) {
    db.getUsersGroups(userId)
      .then((groups) => {
        res.json(groups)
        return null
      })
      .catch(err => {
        console.log(err.message)
        res.sendStatus(500)
      })
  } else {
    db.getGroups()
      .then(groups => {
        res.json(groups)
        return null
      })
      .catch(err => {
        res.sendStatus(500)
        console.log(err.message)
      })
  }
})

// GET specific group
router.get('/:groupId', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupById(groupId)
    .then(group => {
      res.json(group)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// POST group
router.post('/', (req, res) => {
  const { name, regionId } = req.body

  db.addGroup({ name, regionId })
    .then((group) => {
      res.json(group)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// DELETE group
router.delete('/:groupId', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.deleteGroup(groupId)
    .then(() => {
      console.log(groupId)
      // I would make this a single db function for deleteAllGroupMembers(groupId)
      // then you can test it in isolation and make this route much simpler
      db.getGroupMembers(groupId)
        .then((members) => {
          const promises = members.map((member) =>
            db.removeMemberFromGroup(member.id, groupId)
          )
          Promise.all(promises)
            .then(() => {
              res.sendStatus(200)
              return null
            })
            .catch(err => {
              res.sendStatus(500)
              console.log(err.message)
            })
          return null
        })
        .catch(err => {
          res.sendStatus(500)
          console.log(err.message)
        })
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// PUT add a user to a group
router.put('/:groupId/members', (req, res) => {
  // curious that only one of these vars is cast as a Number - might be worth double checking that this is required
  const groupId = Number(req.params.groupId)
  const { id } = req.body
  db.addMemberToGroup(id, groupId)
    .then((group) => {
      res.json(group)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
})

// GET members of a group
router.get('/:groupId/members', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupMembers(groupId)
    .then((members) => {
      res.json(members)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

// DELETE user from a group
router.delete('/:groupId/members', (req, res) => {
  const groupId = Number(req.params.groupId)
  const { id } = req.body

  db.removeMemberFromGroup(id, groupId)
    .then(() => {
      // instead of disabling the linter just return the promise and chain the then block like so
      // if there was a test I would run it but, hey it probably works
      // living on the wild side
      return db.getGroupMembers(groupId)
    })
    .then(members => {
      res.json(members)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

router.get('/:groupId/tags', (req, res) => {
  const id = Number(req.params.groupId)

  db.getGroupsTags(id)
    .then(tags => {
      res.json(tags)
      return null
    })
    .catch(err => {
      console.log(err.message)
      res.sendStatus(500)
    })
})

module.exports = router
