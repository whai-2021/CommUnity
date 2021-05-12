const database = require('../connection')

const getPostsImage = (postId, db = database) => {
  return db('post_images').select('image').where('post_id', postId).first()
}

const addPostImage = (image, postId, db = database) => {
  return db('post_images').insert({ image, post_id: postId })
}

const getGroupImage = (groupId, db = database) => {
  return db('group_images').select('image').where('group_id', groupId).first()
}

const addGroupImage = (image, groupId, db = database) => {
  return db('group_images').insert({ image, group_id: groupId })
}

module.exports = {
  addPostImage,
  getPostsImage,
  getGroupImage,
  addGroupImage
}
