import request from 'superagent'

const rootUrl = '/api/v1/tags'

export function getGroupsTags (groupId) {
  return request
    .get(rootUrl + '/group/' + groupId)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

export function getPostTags (postId) {
  return request
    .get(rootUrl + '/' + postId)
    .then(res => res.body)
}
