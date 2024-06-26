
import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('name');
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState('random person');

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newPerson = e.target.dataset.label;
      setTitle(newPerson)
      setValue(person[newPerson])
    }
  }

  const getPeople = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];

    const { first, last } = person.name;
    const { email, phone } = person;
    const { street: { number, name }, } = person.location;
    const { age } = person.dob;
    const { large: image } = person.picture;
    const { login: { password }, } = person

    const newPerson = {
      email,
      phone,
      age,
      image,
      password,
      name: `${first} ${last}`,
      street: `${number} ${name}`
    }

    setValue(newPerson.name)
    setPerson(newPerson)
    setLoading(false);
    setTitle('name');
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={(person && person.image) || defaultImage} alt="random  person" className='user-img' />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className='icon' data-label="name" onMouseOver={handleValue}>
              <FaUser />
            </button>
            <button className='icon' data-label="email" onMouseOver={handleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className='icon' data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button className='icon' data-label="street" onMouseOver={handleValue}>
              <FaMap />
            </button>
            <button className='icon' data-label="phone" onMouseOver={handleValue}>
              <FaPhone />
            </button>
            <button className='icon' data-label="password" onMouseOver={handleValue}>
              <FaLock />
            </button>
          </div>
          <button className="btn" type='button' onClick={getPeople}>
            {loading ? 'loading..' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
