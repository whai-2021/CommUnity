const database = require('../connection')

const getGroups = (db = database) => {
  return db('groups').select()
}

const getGroupById = (id, db = database) => {
  return db('groups').where('id', id).select().first()
}

const getGroupByName = (name, db = database) => {
  return db('groups')
    .select()
    .where('name', name)
    .first()
}

const addGroup = ({ name, regionId }, db = database) => {
  return db('groups').insert({ name, region_id: regionId })
    .then((id) => getGroupById(id[0]))
}

const getGroupMembers = (groupId, db = database) => {
  return db('group_members')
    .join('users', 'users.id', 'group_members.user_id')
    .select()
    .where('group_id', groupId)
}

const getUsersGroups = (userId, db = database) => {
  return db('group_members')
    .join('groups', 'groups.id', 'group_members.group_id')
    .select()
    .where('user_id', userId)
}

const addMemberToGroup = (userId, groupId, db = database) => {
  return db('group_members').insert({ group_id: groupId, user_id: userId })
    .then((groupId) => {
      return getGroupMembers(groupId)
    })
}

const removeMemberFromGroup = (userId, groupId, db = database) => {
  return db('group_members').where('user_id', userId).where('group_id', groupId).delete()
}

// update group

// search groups

const deleteGroup = (id, db = database) => {
  return db('groups').where('id', id).delete()
}

const getGroupsTags = (groupId, db = database) => {
  return db('posts')
    .join('tags', 'tags.post_id', 'posts.id')
    .select()
    .where('group_id', groupId)
}

module.exports = {
  getGroups,
  addGroup,
  deleteGroup,
  getGroupById,
  getGroupByName,
  addMemberToGroup,
  getGroupMembers,
  removeMemberFromGroup,
  getUsersGroups,
  getGroupsTags
}
