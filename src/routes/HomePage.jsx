// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">
          BPJPH
        </h1>
        <ul className="list-disc ml-6">
          <li>
            <Link to="/article/1">
              Article 1
            </Link>
          </li>
          <li>
            <Link to="/article/2">
              Article 2
            </Link>
          </li>
          <li>
            <Link to="/article/3">
              Article 3
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HomePage