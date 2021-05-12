import React, { useState, useEffect } from 'react'
import PageLinks from '../PageLinks'

import { getNews } from '../../apis/newsapi'

function NewsFeed () {
  const [news, setNews] = useState([])
  const [fullArticle, setFullArticle] = useState(false)

  function getFullArticle () {
    return (
      <div>
        { news.find((article, index) => {
          return <div className='py-2' key={index}>
            <p>{article.content}</p>
          </div>
        }) }

      </div>
    )
  }

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
      <div className='w-screen'>
        <h1 className='w-full py-10 m-4 text-center text-4xl font-bold text-gray-600'>New Zealand News</h1>
        <div className='flex justify center grid gap-8 grid-cols-3 m-10'>
          { news.map((article, index) => {
            return <div className='py-2' key={index}>
              <button onClick={() => setFullArticle(true)} className='text-blue-500 text-left'>{article.title}</button>
              {fullArticle && getFullArticle()}
              <p>{article.description}</p>
            </div>
          }) }
        </div>
      </div>
    </>
  )
}

export default NewsFeed
