/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './routes'
import { Article } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  )
}

export default App
