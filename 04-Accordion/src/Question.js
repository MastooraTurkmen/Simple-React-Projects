import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (question) => {
  const { title, info } = question;
  const [toggle, setToggle] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={() => setToggle(!toggle)} className='btn'>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  )
};

export default Question;
