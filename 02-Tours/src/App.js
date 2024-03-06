import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([])

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

  return (
    <>
      <main>
        <Tours tours={tours} />
        {/* <button onClick={() => setTours()} className='btn' type='button'>Refresh</button> */}
      </main>
    </>
  )
}

export default App
