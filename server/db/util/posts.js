const database = require('../connection')

const { tagExists, getTag, addTagToPost, addTag } = require('./tags')

const getPosts = (db = database) => {
  return db('posts').select()
}

const getPostsByGroup = (groupId, db = database) => {
  return db('posts')
    .join('users', 'users.id', 'posts.author_id')
    .select('*', 'posts.id as id')
    .where('group_id', groupId)
}

const getGroupPostsByTag = (tagId, groupId, db = database) => {
  return db('posts')
    .join('post_tags', 'post_tags.post_id', 'posts.id')
    .join('tags', 'tags.id', 'post_tags.tag_id')
    .join('users', 'users.id', 'posts.author_id')
    .select('author_id', 'group_id', 'body', 'created_at', 'first_name', 'last_name', 'posts.id as id')
    .where('group_id', groupId)
    .andWhere('tags.id', tagId)
}

const getPost = (id, db = database) => {
  return db('posts').where('id', id).select().first()
}

const addPost = ({ userId, groupId, body, createdAt }, tags, db = database) => {
  return db('posts').insert({ author_id: userId, group_id: groupId, body, created_at: createdAt })
    .then(postId => {
      if (tags) {
        const promises = addTagsToPost(tags, postId)
        Promise.all(promises)
          .then(() => {
            return null
          })
          .catch(e => {
            console.log(e.message)
          })
      }
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
}

const addTagsToPost = (tags, postId) => {
  return tags.map((tag) => {
    tagExists(tag)
      .then(tagExists => {
        if (tagExists) {
          addExistingTagToPost(tag, postId)
        } else {
          addNewTagToPost(tag, postId)
        }
        return null
      })
      .catch(e => {
        console.log(e.message)
      })
    return null
  })
}

const addExistingTagToPost = (tag, postId) => {
  getTag(tag)
    .then((tagRes) => {
      addTagToPost({ tagId: tagRes.id, postId })
        .then(() => {
          return null
        })
        .catch(e => {
          console.log(e.message)
        })
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
}

const addNewTagToPost = (tag, postId) => {
  addTag(tag)
    .then(tagId => {
      addTagToPost({ tagId, postId })
        .then(() => {
          return null
        })
        .catch(e => {
          console.log(e.message)
        })
      return null
    })
    .catch(e => {
      console.log(e.message)
    })
}

const deletePost = (id, db = database) => {
  return db('posts').where('id', id).delete()
}

const deletePostTags = (postId, db = database) => {
  return db('post_tags').where('post_id', postId).delete()
}

const savePost = (postId, userId, db = database) => {
  return db('saved_posts')
    .insert({ post_id: postId, user_id: userId })
}

const unsavePost = (postId, userId, db = database) => {
  return db('saved_posts')
    .where({ post_id: postId, user_id: userId })
    .delete()
}

const hasUserSavedPost = (postId, userId, db = database) => {
  return db('saved_posts').select()
    .where({ post_id: postId, user_id: userId })
    .first()
    .then(result => {
      if (result === undefined) {
        return false
      } else {
        return true
      }
    })
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  deletePost,
  getPostsByGroup,
  getGroupPostsByTag,
  deletePostTags,
  savePost,
  unsavePost,
  hasUserSavedPost
}
