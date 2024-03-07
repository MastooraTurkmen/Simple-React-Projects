import React from 'react';

const Categories = ({ categories, categoriesItem }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            type='button'
            key={index}
            onClick={() => categoriesItem(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
};

export default Categories;
