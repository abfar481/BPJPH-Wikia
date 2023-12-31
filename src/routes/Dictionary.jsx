/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import articles from '../data/articles.json'
import { Link } from 'react-router-dom'

const Dictionary = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-full p-4">
          <h1 className="text-6xl font-light text-center tracking-wider mb-16">
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

  const { id, title, content, author, img } = article

  return (
    <Link to={`/article/${id}`}>
      <div className="max-w-[95%] mx-auto p-4 bg-white shadow-md rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2 tracking-widest">
          {title}
        </h2>
        <p className="text-gray-800">
          {`${content.substring(0, 100)}...`}
        </p>
        {img && (
          <div className="mt-4 flex items-center">
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
      </div>
    </Link>
  )
}

export default Dictionary