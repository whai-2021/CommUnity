import request from 'superagent'

const rootUrl = '/api/v1/posts'

export function getPostsByGroup (groupId) {
  return request
    .get(rootUrl + '/?groupId=' + groupId)
    .then(res => res.body)
}

export function getPostTags (postId) {
  return request
    .get(rootUrl + '/' + postId + '/tags')
    .then(res => res.body)
}
