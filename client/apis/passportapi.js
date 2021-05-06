import request from 'superagent'

const rootUrl = '/api/v1/auth'

export function loginUser (user) {
  return request
    .post(rootUrl + '/login')
    .send({
      username: user.username,
      password: user.password_hash
    })
    .then(res => res.body)
}

export function registerUser (user) {
  return request
    .post(rootUrl + '/register')
    .send({
      username: user.username,
      password: user.password_hash
    })
    .then(res => res.body)
}
