import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('');
  const [listm, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [edit, setEdit] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", tyep: "" });


}

export default App
