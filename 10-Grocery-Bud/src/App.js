import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmite = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value')
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      showAlert(true, 'success', 'Item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <section className='section-center'>
      <form className="grocery-form" onSubmit={handleSubmite}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className='clear-btn' onClick={clearList}>clear item</button>
        </div>
      )}
    </section>
  )
}

export default App
