import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setError(false)
      setList(colors)
      console.log(colors);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? "error" : null}`}
          />
          <button className='btn' type='submit'>submite</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color) => {
          const { rbg, weight } = color;
          return (
            <div>
              <h2>{rbg}</h2>
              <p>{weight}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default App
