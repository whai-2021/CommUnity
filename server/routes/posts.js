const express = require('express')
const router = express.Router()

const db = require('../db/util/posts')
const tagsDb = require('../db/util/tags')

// Yo, boss, write me some tests, I'm dying over here

// GET all posts

router.get('/', (req, res) => {
  const { id, groupId, tag } = req.query

  // instead of writing a swiss army route that does all the things just make separate routes, especially since the vars are mutually exclusive. e.g. if id is set it won't listen for any other ones
  // if you really wanted to do it this way then at least extract the function (e.g. line 17:24 somewhere else so you can make it a single line

  if (id) {
    db.getPost(id)
      .then(post => {
        res.json(post)
        return null
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else if (groupId && !tag) {
    db.getPostsByGroup(groupId)
      .then(posts => {
        res.json(posts)
        return null
      })
      .catch(e => {
        res.status(500).send(e.message)
      })
  } else if (tag && groupId) {
    db.getGroupPostsByTag(tag, groupId)
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

// GET Group posts by tag
router.get('/1/tag/posts')

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
