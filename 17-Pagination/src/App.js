import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page])
  }, [followers])

  return (
    <main>
      <div className="section-title">
        <h2>{loading ? 'loading...' : 'pagination'}</h2>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
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
