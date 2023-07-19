// src/Article.js
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'
import articles from '../data/articles.json'

const Article = () => {

  const { id } = useParams()

  const article = articles.find((article) => article.id === parseInt(id, 10))

  if (!article) {

    return <div> Article not found. </div>
  }

  const { title, content, author } = article

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-gray-600 mb-2">
          {`Author: ${author}`}
        </p>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-gray-800">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Article
