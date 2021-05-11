import React, { useState, useEffect } from 'react'
import PageLinks from '../PageLinks'

import { getNews } from '../../apis/newsapi'

function NewsFeed () {
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews()
      .then(res => {
        console.log(res)
        setNews(res.articles)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])
  return (
    <>
      <PageLinks/>
      <ul>
        { news.map((article, index) => { return <li key={index}>{article.title}</li> }) }</ul>
    </>
  )
}

export default NewsFeed
