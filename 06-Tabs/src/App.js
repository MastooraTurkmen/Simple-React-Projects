import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project  '


function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setLoading(false)
    setJobs(data)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading....</h1>
      </section>
    )
  }

  return <h2>tabs</h2>
}

export default App
