const express = require('express')
const router = express.Router()

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const db = require('../db/util/images')
const { uploadImage, downloadImage } = require('../s3')

// POST upload post Image
router.post('/:postId', upload.single('image'), async (req, res) => {
  const postId = Number(req.params.postId)
  const file = req.file

  db.addPostImage(file.filename, postId)
    .then(() => {
      return uploadImage(file)
    })
    .then(() => {
      return unlinkFile(file.path)
    })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET posts image
router.get('/:postId', (req, res) => {
  const postId = Number(req.params.postId)

  db.getPostsImage(postId)
    .then(image => {
      const readStream = downloadImage(image.image)
      readStream.pipe(res)
    })
    .catch(err => {
      if (err.message === "Cannot read property 'image' of undefined") {
        res.sendStatus(204)
      } else {
        res.status(500).send(err.message)
      }
    })

})

// POST upload group Image
router.post('/group/:groupId', upload.single('image'), async (req, res) => {
  const groupId = Number(req.params.groupId)
  const file = req.file
  
  db.addGroupImage(file.filename, groupId)
    .then(() => {
      return uploadImage(file)
    })
    .then(() => {
      return unlinkFile(file.path)
    })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

// GET groups image
router.get('/group/:groupId', (req, res) => {
  const groupId = Number(req.params.groupId)

  db.getGroupImage(groupId)
    .then(image => {
      const readStream = downloadImage(image.image)
      readStream.pipe(res)
    })
    .catch(err => {
      if (err.message === "Cannot read property 'image' of undefined") {
        res.sendStatus(204)
      } else {
        res.status(500).send(err.message)
      }
    })

})

module.exports = router
