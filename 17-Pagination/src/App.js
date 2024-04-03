import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const { loading, data } = useFetch()
  return (
    <main>
      <div className="section-title">
        <h2>{loading ? 'loading...' : 'pagination'}</h2>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return (
              <Follower key={follower.id} {...follower} />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
