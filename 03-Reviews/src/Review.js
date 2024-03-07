import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const showNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      const newPersone = index + 1;
      return showNumber(newPersone)

    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      const newPersone = index - 1;
      return showNumber(newPersone)
    })
  }

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1
    }
    setIndex(showNumber(random))
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author-name'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button onClick={() => nextPerson()} className='prev-btn'><FaChevronLeft /></button>
        <button onClick={() => prevPerson()} className='next-btn'><FaChevronRight /></button>
      </div>
      <button onClick={randomPerson} className='random-btn'>surpise me</button>
    </article>
  );
};

export default Review;
