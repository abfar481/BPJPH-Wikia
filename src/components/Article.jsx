// src/Article.js
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import articles from '../data/articles.json'

const Article = () => {

  const { id } = useParams()

  const article = articles.find((article) => article.id === parseInt(id, 10))

  if (!article) {
    return <div> Article not found. </div>;
  }

  const { title, content, author, img } = article

  return (
    <div className="h-screen flex flex-col justify-center bg-gray-100">
      <div className="w-full max-w-screen-lg p-4 bg-white shadow-md rounded-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">
            {title}
          </h2>
          <Link to="/" className="text-blue-500 hover:underline">
            Go Back
          </Link>
        </div>
        {img && (
          <div className="mb-4 flex items-center">
            <img
              src={img}
              alt={`Profile of ${author}`}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-600 font-medium">
              {author}
            </span>
          </div>
        )}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-gray-800">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Article
