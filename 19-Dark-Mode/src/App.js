import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getLocalStorage = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getLocalStorage);

  const handleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={handleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((articles) => {
          return <Article key={articles.id} {...articles} />
        })}
      </section>
    </main>
  )
}

export default App
