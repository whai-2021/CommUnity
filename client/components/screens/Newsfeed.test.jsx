import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import NewsFeed from './NewsFeed'
import { getNews } from '../../apis/newsapi'

jest.mock('../../apis/newsapi', () => {
  return {
    getNews: jest.fn(() => {
      Promise.resolve(fakeArticles)
    })
  }
})
const fakeArticles = [
  { title: 'Blah' },
  { title: 'blah' },
  { title: 'blah' }
]

test('displays 20 latest news article', () => {
  expect.assertions(1)
  render(<Router><NewsFeed/></Router>)
  const article = screen.getAllByRole('button')
  expect(article).toHaveLength(3)
})
