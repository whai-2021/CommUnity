const express = require('express')
const router = express.Router()

const db = require('../db/util/groups')

// GET all groups
router.get('/', (req, res) => {
  db.getGroups()
    .then(groups => {
      res.json(groups)
      return null
    })
    .catch(err => {
      res.sendStatus(500)
      console.log(err.message)
    })
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

// POST create a group
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
  const groupId = Number(req.params.groupId)
  const id = Number(req.body.id)
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

module.exports = router
