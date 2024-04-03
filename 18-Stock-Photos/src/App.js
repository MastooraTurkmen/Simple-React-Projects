import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([]);

  const fetchData = async () => {
    let url;
    try {
      url = `${mainUrl}?cleint_id=fJIEIAp7KvuevajNm9EmtYa-kIQSzKJn6PhLxUi9E84`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return <h2>stock photos starter</h2>
}

export default App
