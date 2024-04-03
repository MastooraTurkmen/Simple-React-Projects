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
  }, [followers, page])

  const handleButton = (index) => {
    setPage(index)
  }

  const nextBtn = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;
      if (newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage
    })
  }

  const prevBtn = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage
    })
  }

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
        {!loading && <div className="btn-container">
          <button className='prev-btn' onClick={prevBtn}>prev</button>
          {data.map((item, index) => {
            return <button
              className={`page-btn ${index === page ? 'active-btn' : null}`}
              onClick={() => handleButton(index)}

            >{index + 1}</button>
          })}
          <button className='next-btn' onClick={nextBtn}>next</button>
        </div>
        }
      </section>
    </main>
  )
}

export default App
