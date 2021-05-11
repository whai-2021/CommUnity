import request from 'superagent'

export function getNews () {
  return request
    .get('https://newsapi.org/v2/top-headlines?country=nz&apiKey=a5036ea89d634c5bb80c66a424651efc')
    .then(res => res.body)
}
