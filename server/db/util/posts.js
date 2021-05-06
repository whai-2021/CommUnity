const database = require('./connection')

const getPosts = (db = database) => {
  return db('posts').select()
}

const getPostsByGroup = (groupId, db = database) => {
  return db('posts').select().where('group_id', groupId)
}

const getGroupPostsByTag = (tag, groupId, db = database) => {
  return db('posts')
    .join('tags', 'tags.post_id', 'posts.id')
    .select()
    .where('group_id', groupId)
    .andWhere('tag', tag)
}

const getPost = (id, db = database) => {
  return db('posts').where('id', id).select().first()
}

const addPost = (post, db = database) => {
  return db('posts').insert(post)
    .then((id) => getPost(id[0]))
}

// update post

const deletePost = (id, db = database) => {
  return db('users').where('id', id).delete()
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  getPostsByGroup,
  getGroupPostsByTag
}
