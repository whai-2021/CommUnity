const database = require('../connection')

const getPostTags = (postId, db = database) => {
  return db('post_tags')
    .join('tags', 'tags.id', 'post_tags.tag_id')
    .select('tag_id as id', 'tag', 'post_id')
    .where('post_id', postId)
    .then(res => {
      return res
    })
}

const addTag = (tag, db = database) => {
  return db('tags')
    .insert({ tag: tag.toLowerCase() })
    .then(id => id)
}

const addTagToPost = ({ tagId, postId }, db = database) => {
  return db('post_tags')
    .insert({ tag_id: tagId, post_id: postId })
    .then((tagId) => tagId)
}

const tagExists = (tag, db = database) => {
  return db('tags')
    .count('id as n')
    .where('tag', tag)
    .then(count => {
      return count[0].n > 0
    })
}

const getTag = (tag, db = database) => {
  return db('tags')
    .select()
    .where('tag', tag.toLowerCase())
    .first()
}

module.exports = {
  addTag,
  addTagToPost,
  tagExists,
  getTag,
  getPostTags
}
