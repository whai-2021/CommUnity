const express = require('express')
const router = express.Router()

const db = require('../db/util/posts')

// GET all posts
// GET Posts for a group
// GET posts in a group by tag
router.get('/', (req, res) => {
  const { id, groupId, tag } = req.query

  if (id) {
    db.getPost(id)
      .then(post => {
        res.json(post)
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else if (groupId) {
    db.getPostsByGroup(groupId)
      .then(posts => {
        res.json(posts)
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else if (tag) {
    db.getGroupPostsByTag(tag)
      .then(posts => {
        res.json(posts)
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else {
    db.getPosts()
      .then(posts => {
        res.json(posts)
        return null
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  }
})

// POST create post
router.post('/', (req, res) => {
  const { userId, groupId, body, createdAt } = req.body
  db.addPost(userId, groupId, body, createdAt)
    .then(posts => {
      res.join(posts)
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// DELETE post
router.delete('./userId', (req, res) => {
  const userId = req.params.id
  db.deletePost(userId)
    .then(() => {
      res.sendStatus(200)
  })
    .catch(e => {
      res.status(500).send(e.message)
})
})

module.exports = router
