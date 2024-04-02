import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('## markdown')

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <main>
      <section className="markdown">
        <textarea
          className='input'
          value={markdown}
          onChange={handleChange}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
