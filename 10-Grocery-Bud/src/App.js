import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [listm, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", tyep: "" });

 
  return (
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handleSubmite}>
        {alert.show && <List />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className='grocery'
            placeholder='e.g. milk'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "sumbit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className='clear-btn'>clear item</button>
      </div>
    </section>
  )
}

export default App
