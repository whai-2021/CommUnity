import request from 'superagent'

const rootUrl = '/api/v1/groups'

export function getGroups () {
  return request
    .get(rootUrl)
    .then(res => res.body)
}

export function getUsersGroups (userId) {
  return request
    .get(rootUrl + '?userId=' + userId)
    .then(res => res.body)
}

export function getGroupById (groupId) {
  return request
    .get(rootUrl + '/' + groupId)
    .then(res => res.body)
}
