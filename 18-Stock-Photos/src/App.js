import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [pages, setPages] = useState(1);
  const [query, setQuery] = useState('');
  const mounted = useRef(true)

  const fetchData = async () => {
    setLoading(true)
    let url;
    const urlPage = `&page=${pages}`
    const urlQuery = `&query=${query}`

    if (query) {
      url = `${mainUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPage) => {
        if (query && pages === 1) {
          return data.results;
        } else if (query) {
          return [...oldPage, ...data.results]
        } else {
          return [...oldPage, ...data]
        }
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
    // eslint-disable-next-line
  }, [pages]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (pages === 1) {
      fetchData(1)
    }
    setPages(1)
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder='search'
            className='form-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image) => {
            console.log(image);
            return <Photo key={image.id} {...image} />
          })}
        </div>
      </section>
      {loading && <h2 className='loading'>Loading...</h2>}
    </main>
  )
}

export default App
