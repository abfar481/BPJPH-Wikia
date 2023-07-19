// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Article } from '../components'
import articles from '../data/articles.json'

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-2xl p-4">
          <h1 className="text-4xl font-bold mb-8">
            Dictionary
          </h1>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage