import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [pages, setPages] = useState(1)

  const fetchData = async () => {
    setLoading(true)
    const page = `&pages=${pages}`
    let url;
    url = `${mainUrl}${clientID}${page}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPage) => {
        return [...oldPage, ...data]
      })
      setLoading(false)
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [pages])

  useEffect(() => {
    const scrollWindow = window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
        setPages((oldPages) => {
          return oldPages + 1
        })
      }
    });

    return () => window.addEventListener('scroll', scrollWindow)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder='search' className='form-input' />
          <button className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image) => {
            return <Photo key={image.id} {...image} />
          })}
        </div>
      </section>
      {loading && <h2 className='loading'>Loading...</h2>}
    </main>
  )
}

export default App
