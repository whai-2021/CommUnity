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
  return db('groups').insert({ name, region_id: regionId }, 'id')
    .then((id) => getGroupById(id[0]))
}

const getGroupMembers = (groupId, db = database) => {
  return db('group_members')
    .join('users', 'users.id', 'group_members.user_id')
    .select('first_name', 'last_name', 'users.id')
    .where('group_id', groupId)
}

const getUsersGroups = (userId, db = database) => {
  return db('group_members')
    .join('groups', 'groups.id', 'group_members.group_id')
    .select()
    .where('user_id', userId)
}

const addMemberToGroup = (userId, groupId, db = database) => {
  return db('group_members').insert({ group_id: groupId, user_id: userId }, 'id')
    .then((groupId) => {
      return getGroupMembers(groupId)
    })
}

const removeMemberFromGroup = (userId, groupId, db = database) => {
  return db('group_members').where('user_id', userId).where('group_id', groupId).delete()
}

const deleteAllGroupMembers = (groupId, db = database) => {
  return getGroupMembers(groupId)
    .then((members) => {
      const promises = members.map((member) =>
        removeMemberFromGroup(member.id, groupId)
      )
      return Promise.all(promises)
    })
}

// update group

// search groups

const deleteGroup = (id, db = database) => {
  return db('groups').where('id', id).delete()
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
  deleteAllGroupMembers
}
