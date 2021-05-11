import request from 'superagent'

const rootUrl = '/api/v1/groups'

export function getGroups () {
  return request
    .get(rootUrl)
    .then(res => res.body)
}

export function getUsersGroups (userId) {
  return request
    .get(rootUrl + '/user/' + userId)
    .then(res => res.body)
}

export function getGroupById (groupId) {
  return request
    .get(rootUrl + '/' + groupId)
    .then(res => res.body)
}

export function getGroupMembers (groupId) {
  return request
    .get(rootUrl + '/' + groupId + '/members')
    .then(res => res.body)
}

export function addUserToGroup (groupId, user) {
  return request
    .put(rootUrl + '/' + groupId + '/members')
    .send(user)
}

export function deleteUserFromGroup (groupId, user) {
  return request
    .delete(rootUrl + '/' + groupId + '/members')
    .send(user)
}

export function addGroup ({ name, regionId }) {
  return request
    .post(rootUrl)
    .send({ name, regionId })
    .then(res => res.body)
}
