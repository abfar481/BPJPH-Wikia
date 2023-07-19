/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dictionary } from './routes'
import { Article } from './components'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Dictionary />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  )
}

export default App
