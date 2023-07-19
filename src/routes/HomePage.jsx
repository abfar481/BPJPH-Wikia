/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import articles from '../data/articles.json'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="max-w-2xl p-4">
          <h1 className="text-4xl font-bold mb-8">
            Dictionary
          </h1>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}

const ArticleCard = ({ article }) => {

  const { id, title, content, author } = article

  return (
    <Link to={`/article/${id}`}>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mb-4">
        <h2 className="text-xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-1">
          {`Author: ${author}`}
        </p>
        <p className="text-gray-800">
          {`${content.substring(0, 100)}...`}
        </p>
      </div>
    </Link>
  )
}

export default HomePage