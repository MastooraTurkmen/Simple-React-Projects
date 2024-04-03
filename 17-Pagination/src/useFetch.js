import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/MastooraTurkmen/followers?per_page=100'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
    paginate(data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
