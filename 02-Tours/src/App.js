import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([])

  useEffect(async () => {
    try {
      const respons = await fetch(url);
      const tours = await respons.json();
      setTours(tours)
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }, [])

  if (isLoading) {
    return <div>
      <Loading />
    </div>
  }

  return (
    <>
      <section className='container'>
        <h1>Our tours</h1>
        <Tours tours={tours} />
      </section>
    </>
  )
}

export default App
