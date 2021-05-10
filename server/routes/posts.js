const express = require('express')
const router = express.Router()

const db = require('../db/util/posts')
const tagsDb = require('../db/util/tags')

// GET all posts
// GET Posts for a group
// GET posts in a group by tag
router.get('/', (req, res) => {
  const { id, groupId, tag } = req.query

  if (id) {
    db.getPost(id)
      .then(post => {
        res.json(post)
        return null
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else if (groupId) {
    db.getPostsByGroup(groupId)
      .then(posts => {
        res.json(posts)
        return null
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else if (tag) {
    db.getGroupPostsByTag(tag)
      .then(posts => {
        res.json(posts)
        return null
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
  const { post, tags } = req.body
  db.addPost(post, tags)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
})

// DELETE post
router.delete('/:postId', (req, res) => {
  const postId = req.params.postId
  db.deletePost(postId)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET a posts tags
router.get('/:postId/tags', (req, res) => {
  const postId = Number(req.params.postId)
  tagsDb.getPostTags(postId)
    .then((tags) => {
      res.json(tags)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
