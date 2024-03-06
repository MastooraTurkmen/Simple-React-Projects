import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([])

  function removeItem(id) {
    const remove = tours.filter((tour) => tour.id !== id)
    setTours(remove)
  }


  const getFetch = async () => {
    try {
      const respons = await fetch(url);
      const tours = await respons.json();
      console.log(tours)
      setTours(tours)
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    getFetch()
  }, [])

  if (isLoading) {
    return <div>
      <main>
        <Loading />
      </main>
    </div>
  }

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={getFetch}>Refresh</button>
      </div>
    </main>
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeItem={removeItem} />
      </main>
    </>
  )
}

export default App
